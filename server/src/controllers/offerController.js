const { Offer } = require("../models");
const ServerError = require("../errors/ServerError");
const CONSTANTS = require('../constants');

module.exports.getOffers = async (req, res, next) => {
  try {
    let offers = await Offer.findAll({
      where: { status: CONSTANTS.OFFER_STATUSES.PENDING },
    });
    res.send(offers);
  } catch (error) {
    next(new ServerError(error));
  }
};
