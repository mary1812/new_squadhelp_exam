const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const {
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_TIME,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_TIME,
} = require('../constants');

const signJWT = promisify(jwt.sign);
const verifyJWT = promisify(jwt.verify);

const tokenConfig = {
  access: { secret: ACCESS_TOKEN_SECRET, time: ACCESS_TOKEN_TIME },
  refresh: { secret: REFRESH_TOKEN_SECRET, time: REFRESH_TOKEN_TIME },
};

const createToken = async (payload, { secret, time }) => {
  return signJWT(
    {
      userId: payload.id,
      email: payload.email,
      role: payload.role,
    },
    secret,
    {
      expiresIn: time,
    }
  );
};

module.exports.createTokenPair = async (payload) => {
  const accessToken = await createToken(payload, tokenConfig.access);
  const refreshToken = await createToken(payload, tokenConfig.refresh);

  return {
    accessToken,
    refreshToken,
  };
};

module.exports.verifyAccessToken = async(token) => {
  return verifyJWT(token, ACCESS_TOKEN_SECRET);
}
module.exports.verifyRefreshToken = async(token) => {
  return verifyJWT(token, REFRESH_TOKEN_SECRET);
}