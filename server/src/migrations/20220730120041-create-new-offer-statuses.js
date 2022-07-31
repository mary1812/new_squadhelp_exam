"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Offers", "status", {
      type: Sequelize.TEXT
    }),
      await queryInterface.sequelize
        .query('drop type "enum_Offers_status";')
        .then(() =>
          queryInterface.changeColumn("Offers", "status", {
            type: Sequelize.ENUM(
              "pending",
              "rejected",
              "won",
              "voided",
              "verified"
            ),
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