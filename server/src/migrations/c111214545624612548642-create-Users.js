const { ROLES } = require('../constants');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        firstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        displayName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        passwordHash: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        avatar: {
          type: Sequelize.STRING,
        },
        role: {
          type: Sequelize.ENUM(...Object.values(ROLES)),
          allowNull: false,
        },
        balance: {
          type: Sequelize.DECIMAL,
          allowNull: false,
          defaultValue: 0,
        },
        rating: {
          type: Sequelize.FLOAT,
          allowNull: false,
          defaultValue: 0,
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        }
      })
      .then(() =>
        queryInterface.addConstraint('Users', {
          type: 'check',
          fields: ['balance'],
          where: {
            balance: {
              [Sequelize.Op.gte]: 0,
            },
          },
        })
      );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
