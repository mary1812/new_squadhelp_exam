'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Catalog extends Model {
    static associate({ User, Conversation }) {
      Catalog.belongsTo(User, { foreignKey: 'userId', sourceKey: 'id' });
      Catalog.belongsToMany(Conversation, { through: 'CatalogToConversation', foreignKey: 'catalogId'});
    }
  }
  Catalog.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      catalogName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      chats: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Catalog',
      timestamps: true
    }
  );
  return Catalog;
};