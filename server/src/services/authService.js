const JwtService = require('./jwtService');
const { MAX_DEVICES_AMOUNT } = require('../constants');
const { prepareUser } = require('../utils/userUtils');

module.exports.createSession = async (user) => {
  const tokenPair = await JwtService.createTokenPair(user);

  if ((await user.countRefreshTokens()) >= MAX_DEVICES_AMOUNT) {
    const [oldestToken] = await user.getRefreshTokens({
      order: [['updatedAt', 'ASC']],
    });

    oldestToken.update({ value: tokenPair.refreshToken });
  } else {
    await user.createRefreshToken({ value: tokenPair.refreshToken });
  }

  return { user: prepareUser(user), tokenPair };
};

module.exports.refreshSession = async (refreshToken) => {
  const user = await refreshToken.getUser();
  const tokenPair = await JwtService.createTokenPair(user);
  refreshToken.update({ value: tokenPair.refreshToken });

  return {
    user: prepareUser(user),
    tokenPair,
  };
};
