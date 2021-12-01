const { User, RefreshToken } = require('../models');
const AuthService = require('../services/authService');

module.exports.login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    // 1 нашли юзера
    const user = await User.findOne({ where: { email } });

    // 2 проверили пароль юзера
    if (user && (await user.comparePasswords(password))) {
      // 3 сгенерировать токены

      const data = await AuthService.createSession(user);

      // 4 оправить на клиент
      return res.status(200).send({ data });
    }

    // 5 если в части 2 была ошибка кидаемся ошибкой
    res.status(404).send('Wrong user data');
  } catch (err) {
    next(err);
  }
};

module.exports.registration = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    const data = await AuthService.createSession(user);

    // 4 оправить на клиент
    res.status(200).send({ data });
  } catch (err) {
    next(err);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
    const {
      body: { refreshToken: refresh },
    } = req; // не протух

    const foundToken = await RefreshToken.findOne({
      where: {
        value: refresh,
      },
    });

    const data = await AuthService.refreshSession(foundToken);

    // 4 оправить на клиент
    res.status(200).send({
      data,
    });
  } catch (err) {
    next(err);
  }
};
