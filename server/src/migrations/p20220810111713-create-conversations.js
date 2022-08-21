"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("Conversations", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userOneId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Users",
            key: "id",
          },
        },
        userTwoId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Users",
            key: "id",
          },
        },
        blackList: {
          allowNull: false,
          type: Sequelize.ARRAY(Sequelize.DataTypes.BOOLEAN),
        },
        favoriteList: {
          allowNull: false,
          type: Sequelize.ARRAY(Sequelize.DataTypes.BOOLEAN),
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
    return queryInterface.dropTable("Conversations");
  },
};