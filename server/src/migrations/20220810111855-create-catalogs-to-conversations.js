"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("CatalogsToConversations", {
        catalogId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          references: {
            model: "Catalogs",
            key: "id",
          },
        },
        conversationId: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          references: {
            model: "Conversations",
            key: "id",
          },
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("CatalogsToConversations");
  },
};