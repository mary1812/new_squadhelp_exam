'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate({ User, Conversation }) {
      Message.belongsTo(User, { foreignKey: 'senderId', sourceKey: 'id' });
      Message.belongsTo(Conversation, {
        foreignKey: 'conversationId',
        sourceKey: 'id',
      });
    }
  }
  Message.init(
    {
      senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      conversationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Message',
      timestamps: true
    }
  );
  return Message;
};