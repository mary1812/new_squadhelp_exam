const { User } = require('../models');

module.exports.login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    // 1 нашли юзера
    const foundUser = await User.findOne({ where: { email } });

    // 2 проверили пароль юзера
    if (foundUser && (await foundUser.comparePasswords(password))) {
      // 3 сгенерировать токены

      // 4 оправить на клиент
      res.status(200).send({
        data: {
          accessToken: 'asdohdggfdsilggyofogf',
          refreshToken: 'afdilgbifbgfds',
        },
      });
    }

    // 5 если в части 2 была ошибка кидаемся ошибкой
    res.status(404).send('FWrong user data');
  } catch (err) {
    next(err);
  }
};

module.exports.registration = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
