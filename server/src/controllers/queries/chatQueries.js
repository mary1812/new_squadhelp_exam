const { Catalog, Conversation, CatalogToConversation } = require('../../models');
const ServerError = require('../../errors/ServerError');

module.exports.findConversation = async (predicate) => {
  const conversation = await Conversation.findOne(
    {
      where: predicate,
    }
  )
  if (!conversation) {
    throw new ServerError('cannot find conversation');
  } else {
    return conversation
  }
}

module.exports.createOrFindConversation = async (data) => {
  let newConversation = await Conversation.findOne(
    {
      where: data,
    }
  )
  if (!newConversation) {
    newConversation = await Conversation.create({
      ...data,
      blackList: [false, false],
      favoriteList: [false, false]
    })
  }
  return newConversation
}

module.exports.findCatalog = async (predicate) => {
  const catalog = await Catalog.findOne(
    {
      where: predicate,
    }
  )
  if (!catalog) {
    throw new ServerError('cannot find catalog');
  } else {
    return catalog
  }
}