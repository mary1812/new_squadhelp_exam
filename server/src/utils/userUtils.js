const _ = require('lodash');

module.exports.prepareUser = (user) => _.omit(user.get(), ['password'])