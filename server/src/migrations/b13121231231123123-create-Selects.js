module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Selects', {
      type: {
        primaryKey: true,
        type: Sequelize.STRING,
      },
      describe: {
        primaryKey: true,
        type: Sequelize.STRING,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Selects');
  },
};
