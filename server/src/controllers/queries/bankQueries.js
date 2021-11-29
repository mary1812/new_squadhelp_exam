const {CreditCard} = require('../../models');
const BankDeclineError = require('../../errors/BankDeclineError');

module.exports.updateBankBalance = async (data, predicate, transaction) => {
  const [updatedCount, [updatedBank]] = await CreditCard.update(data,
    { where: predicate, returning: true, transaction });
  if (updatedCount < 2) {
    throw new BankDeclineError('Bank decline transaction');
  }
};
