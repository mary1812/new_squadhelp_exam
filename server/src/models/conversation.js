'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    static associate({ User, Message, Catalog}) {
      Conversation.belongsTo(User, { foreignKey: 'userOneId', sourceKey: 'id' });
      Conversation.belongsTo(User, { foreignKey: 'userTwoId', sourceKey: 'id' });
      Conversation.hasMany(Message, { foreignKey: 'conversationId', targetKey: 'id' });
      Conversation.belongsToMany(Catalog, { through: 'CatalogToConversation', foreignKey:  'conversationId'});
    }
  }
  Conversation.init(
    {
      userOneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userTwoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      blackList: {
        type: DataTypes.ARRAY(DataTypes.BOOLEAN),
        allowNull: false,
      },
      favoriteList: {
        type: DataTypes.ARRAY(DataTypes.BOOLEAN),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Conversation',
      timestamps: true
    }
  );
  return Conversation;
};