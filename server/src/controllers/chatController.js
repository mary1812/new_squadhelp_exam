const { Op } = require("sequelize");
const {
  Conversation,
  Message,
  Catalog,
  User,
  CatalogToConversation,
} = require("../models");
const userQueries = require("./queries/userQueries");
const chatQueries = require("./queries/chatQueries");
const controller = require("../socketInit");
const _ = require("lodash");

module.exports.addMessage = async (req, res, next) => {
  const participants = [req.tokenData.userId, req.body.recipient];
  participants.sort(
    (participant1, participant2) => participant1 - participant2
  );
  try {
    let newConversation = await chatQueries.createOrFindConversation(
      {
        userOneId: participants[0],
        userTwoId: participants[1],
        
      }
    );

    const message = await Message.create({
      senderId: req.tokenData.userId,
      body: req.body.messageBody,
      conversationId: newConversation.id,
    });

    message.setDataValue("participants", participants);

    const interlocutorId = participants.filter(
      (participant) => participant !== req.tokenData.userId
    )[0];

    const preview = {
      id: newConversation.id,
      sender: req.tokenData.userId,
      text: req.body.messageBody,
      createAt: message.createdAt,
      participants,
      blackList: newConversation.blackList,
      favoriteList: newConversation.favoriteList,
    };

    controller.getChatController().emitNewMessage(interlocutorId, {
      message,
      preview: {
        id: newConversation.id,
        sender: req.tokenData.userId,
        text: req.body.messageBody,
        createAt: message.createdAt,
        participants,
        blackList: newConversation.blackList,
        favoriteList: newConversation.favoriteList,
        interlocutor: {
          id: req.tokenData.userId,
          firstName: req.tokenData.firstName || req.tokenData.email,
          lastName: req.tokenData.lastName,
          displayName: req.tokenData.displayName,
          avatar: req.tokenData.avatar,
          email: req.tokenData.email,
        },
      },
    });
    res.send({
      message,
      preview: Object.assign(preview, { interlocutor: req.body.interlocutor }),
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getChat = async (req, res, next) => {
  const participants = [req.tokenData.userId, req.body.interlocutorId];
  participants.sort(
    (participant1, participant2) => participant1 - participant2
  );
  try {
    const conversation = await chatQueries.createOrFindConversation({
      userOneId: participants[0],
      userTwoId: participants[1],
    });

    let messages = [];

    if (conversation) {
      messages = await Message.findAll({
        where: {
          senderId: participants,
          conversationId: conversation.id,
        },
      });
    }

    const interlocutor = await userQueries.findUser({
      id: req.body.interlocutorId,
    });


    res.send({
      messages,
      interlocutor: {
        firstName: interlocutor.firstName,
        lastName: interlocutor.lastName,
        displayName: interlocutor.displayName,
        id: interlocutor.id,
        avatar: interlocutor.avatar,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getPreview = async (req, res, next) => {
  try {
    const conversations = await Conversation.findAll({
      where: {
        [Op.or]: [
          { userOneId: req.tokenData.userId },
          { userTwoId: req.tokenData.userId },
        ],
      },
      include: [{ model: Message }],
    });

    const interlocutors = [];

    const filterFunc = (userId, interlocutorOneId, interlocutorTwoId) => {
      if (interlocutorOneId !== userId) {
        return interlocutorOneId;
      } else if (interlocutorTwoId !== userId) {
        return interlocutorTwoId;
      }
    };

    conversations.forEach((conversation) => {
      interlocutors.push(
        filterFunc(
          req.tokenData.userId,
          conversation.dataValues.userOneId,
          conversation.dataValues.userTwoId
        )
      );
    });

    const senders = await User.findAll({
      where: {
        id: interlocutors,
      },
      attributes: ["id", "firstName", "lastName", "displayName", "avatar"],
    });
    conversations.forEach((conversation) => {
      senders.forEach((sender) => {
        if (conversation.dataValues.userOneId === sender.dataValues.id) {
          conversation.setDataValue("interlocutor", {
            id: sender.dataValues.id,
            firstName: sender.dataValues.firstName,
            lastName: sender.dataValues.lastName,
            displayName: sender.dataValues.displayName,
            avatar: sender.dataValues.avatar,
          });
        } else if (conversation.dataValues.userTwoId === sender.dataValues.id) {
          conversation.setDataValue("interlocutor", {
            id: sender.dataValues.id,
            firstName: sender.dataValues.firstName,
            lastName: sender.dataValues.lastName,
            displayName: sender.dataValues.displayName,
            avatar: sender.dataValues.avatar,
          });
        }
      });

      const lastMessage = conversation.Messages.pop();
      if (lastMessage) {
      conversation.setDataValue("text", lastMessage.body);
      conversation.setDataValue("sender", lastMessage.senderId);
      }
      conversation.setDataValue("participants", [
        conversation.dataValues.userOneId,
        conversation.dataValues.userTwoId,
      ]);
    });
    res.send(conversations);
  } catch (err) {
    next(err);
  }
};

module.exports.blackList = async (req, res, next) => {
  try {
    const chat = await chatQueries.findConversation({
      userOneId: req.body.participants,
      userTwoId: req.body.participants,
    });

    let newBlackList = [...chat.dataValues.blackList];
    newBlackList[req.body.participants.indexOf(req.tokenData.userId)] =
      req.body.blackListFlag;

    chat.update({
      blackList: newBlackList,
    });
    await chat.save();

    chat.setDataValue("participants", [
      chat.dataValues.userOneId,
      chat.dataValues.userTwoId,
    ]);
    res.send(chat);

    const interlocutorId = req.body.participants.filter(
      (participant) => participant !== req.tokenData.userId
    )[0];
    controller.getChatController().emitChangeBlockStatus(interlocutorId, chat);
  } catch (err) {
    res.send(err);
  }
};

module.exports.favoriteChat = async (req, res, next) => {
  req.body.participants.sort(
    (participant1, participant2) => participant1 - participant2
  );

  try {
    const chat = await chatQueries.findConversation({
      userOneId: req.body.participants[0],
      userTwoId: req.body.participants[1],
    });

    let newFavoriteList = [...chat.dataValues.favoriteList];

    newFavoriteList[req.body.participants.indexOf(req.tokenData.userId)] =
      req.body.favoriteFlag;

    chat.update({
      favoriteList: newFavoriteList,
    });
    await chat.save();
    chat.setDataValue("participants", [
      chat.dataValues.userOneId,
      chat.dataValues.userTwoId,
    ]);

    res.send(chat);
  } catch (err) {
    res.send(err);
  }
};

module.exports.createCatalog = async (req, res, next) => {
  try {
    const catalogCheck = await Catalog.findOne({
      where: {
        catalogName: req.body.catalogName,
        userId: req.tokenData.userId,
      },
    });
    if (!catalogCheck) {
      const catalog = await Catalog.create({
        userId: req.tokenData.userId,
        catalogName: req.body.catalogName,
        chats: [req.body.chatId],
      });
      await CatalogToConversation.create({
        catalogId: catalog.dataValues.id,
        conversationId: req.body.chatId,
      });
      res.send(catalog);
    } else {
      if (!catalogCheck.chats.includes(req.body.chatId)) {
        const chatsArray = [...catalogCheck.chats];
        chatsArray.push(req.body.chatId);
        catalogCheck.update({ chats: chatsArray });
        catalogCheck.save();
        await CatalogToConversation.create({
          catalogId: catalogCheck.dataValues.id,
          conversationId: req.body.chatId,
        });
      }
      res.send(catalogCheck);
    }
  } catch (error) {
    next(error);
  }
};

module.exports.updateNameCatalog = async (req, res, next) => {
  try {
    const catalog = await chatQueries.findCatalog({
      id: req.body.catalogId,
      userId: req.tokenData.userId,
    });
    catalog.update({ catalogName: req.body.catalogName });
    catalog.save();
    res.send(catalog);
  } catch (error) {
    next(error);
  }
};

module.exports.addNewChatToCatalog = async (req, res, next) => {
  try {
    const catalog = await chatQueries.findCatalog({
      id: req.body.catalogId,
      userId: req.tokenData.userId,
    });
    if (!catalog.chats.includes(req.body.chatId)) {
      const chatsArray = [...catalog.chats];
      chatsArray.push(req.body.chatId);
      catalog.update({ chats: chatsArray });
      catalog.save();
      await CatalogToConversation.create({
        catalogId: catalog.dataValues.id,
        conversationId: req.body.chatId,
      });
    }
    res.send(catalog);
  } catch (err) {
    next(err);
  }
};

module.exports.removeChatFromCatalog = async (req, res, next) => {
  try {
    const catalog = await chatQueries.findCatalog({
      id: req.body.catalogId,
      userId: req.tokenData.userId,
    });

    const newChats = catalog.chats.filter((chatId) => {
      return chatId != req.body.chatId;
    });

    catalog.update({ chats: newChats });
    catalog.save();
    await CatalogToConversation.destroy({
      where: {
        catalogId: req.body.catalogId,
        conversationId: req.body.chatId,
      },
    });

    res.send(catalog);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteCatalog = async (req, res, next) => {
  try {
    await CatalogToConversation.destroy({
      where: {
        catalogId: req.body.catalogId,
      },
    });

    await Catalog.destroy({
      where: { id: req.body.catalogId, userId: req.tokenData.userId },
    });

    res.end();
  } catch (error) {
    next(error);
  }
};

module.exports.getCatalogs = async (req, res, next) => {
  try {
    const catalogs = await Catalog.findAll({
      where: {
        userId: req.tokenData.userId,
      },
    });
    res.send(catalogs);
  } catch (error) {
    next(error);
  }
};
