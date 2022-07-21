'use strict';
const bcrypt = require('bcrypt');
const {
  SALT_ROUNDS,
  ROLES: { MODERATOR },
} = require('../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Moder',
        lastName: 'Moderovich',
        displayName: 'moderator',
        passwordHash: await bcrypt.hashSync('1234Test', SALT_ROUNDS),
        email: 'moderator@test.test',
        role: MODERATOR
      }
     
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

