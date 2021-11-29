const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../../.env')
});

const {
  env: {
    SQUADHELP_BANK_CVC,
    SQUADHELP_BANK_EXPIRY,
    SQUADHELP_BANK_NAME,
    SQUADHELP_BANK_NUMBER,

  }
} = process;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'CreditCards',
      [
        {
          cardNumber: SQUADHELP_BANK_NUMBER,
          name: SQUADHELP_BANK_NAME,
          expiry: SQUADHELP_BANK_EXPIRY,
          cvc: SQUADHELP_BANK_CVC,
          balance: 0,
        },
        {
          cardNumber: '4111111111111111',
          name: 'yriy',
          expiry: '09/23',
          cvc: '505',
          balance: 5000,
        },
      ],
      {}
    );
  },
};
