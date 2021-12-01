const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');
const CONSTANTS = require('../constants');
const TokenError = require('../errors/TokenError');
const userQueries =require('../controllers/queries/userQueries');
const { verifyAccessToken } = require('../services/jwtService');

module.exports.checkAuth = async (req, res, next) => {

  try {

    const { headers: {authorization}} = req;
    if(authorization) {
      const [type, token] = authorization.split(' ');

      const tokenData = await verifyAccessToken(token);
      const foundUser = await userQueries.findUser({ id: tokenData.userId });
      return res.send({
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        role: foundUser.role,
        id: foundUser.id,
        avatar: foundUser.avatar,
        displayName: foundUser.displayName,
        balance: foundUser.balance,
        email: foundUser.email,
      });
    }

    next(createHttpError(401, 'Need token'));

  } catch (err) {
    console.log(err);
    next(new TokenError());
  }
};

module.exports.checkToken = async (req, res, next) => {
  const accessToken = req.headers.authorization;
  if (!accessToken) {
    return next(new TokenError('need token'));
  }
  try {
    req.tokenData = jwt.verify(accessToken, CONSTANTS.ACCESS_TOKEN_SECRET);
    next();
  } catch (err) {
    next(new TokenError());
  }
};
