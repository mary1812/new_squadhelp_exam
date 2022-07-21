"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Users", "role", {
      type: Sequelize.TEXT,
    }),
      await queryInterface.sequelize
        .query('drop type "enum_Users_role";')
        .then(() =>
          queryInterface.changeColumn("Users", "role", {
            type: Sequelize.ENUM("customer", "creator", "moderator"),
          })
        );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
