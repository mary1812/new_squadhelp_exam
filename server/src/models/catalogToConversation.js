"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CatalogToConversation extends Model {
  }
  CatalogToConversation.init(
    {},
    {
      sequelize,
      modelName: "CatalogToConversation",
      tableName: "CatalogsToConversations",
      timestamps: true,
    }
  );

  return CatalogToConversation;
};
