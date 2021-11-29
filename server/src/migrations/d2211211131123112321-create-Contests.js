const { CONTEST_TYPES } = require('../constants');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      contestType: {
        allowNull: false,
        type: Sequelize.ENUM(...Object.values(CONTEST_TYPES)),
      },
      fileName: {
        type: Sequelize.STRING,
      },
      originalFileName: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      typeOfName: {
        type: Sequelize.STRING,
      },
      industry: {
        type: Sequelize.STRING,
      },
      focusOfWork: {
        type: Sequelize.TEXT,
      },
      targetCustomer: {
        type: Sequelize.TEXT,
      },
      styleName: {
        type: Sequelize.STRING,
      },
      nameVenture: {
        type: Sequelize.STRING,
      },
      typeOfTagline: {
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      brandStyle: {
        type: Sequelize.STRING,
      },
      prize: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      priority: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      orderId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contests');
  },
};
