const { Offer } = require("../models");
const ServerError = require("../errors/ServerError");
const CONSTANTS = require('../constants');
const contestQueries = require("./queries/contestQueries");

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

const voidOffer = async (offerId, creatorId, contestId) => {
  const voidOffer = await contestQueries.updateOffer(
    { status: CONSTANTS.OFFER_STATUSES.VOIDED },
    { id: offerId }
  );
  return voidOffer;
};

const approveOffer = async (offerId, creatorId, contestId) => {
  const approvedOffer = await contestQueries.updateOffer(
    { status: CONSTANTS.OFFER_STATUSES.VERIFIED },
    { id: offerId }
  );
  return approvedOffer;
};


module.exports.setOfferStatusByModerator = async (req, res, next) => {
  let transaction;
  if (req.body.command === CONSTANTS.OFFER_STATUSES.VOIDED) {
    try {
      const offer = await voidOffer(
        req.body.offerId,
        req.body.creatorId,
        req.body.contestId
      );
      res.send(offer);
    } catch (err) {
      next(err);
    }
  } else if (req.body.command === CONSTANTS.OFFER_STATUSES.VERIFIED) {
    try {
      const offer = await approveOffer(
        req.body.offerId,
        req.body.creatorId,
        req.body.contestId
      );
      res.send(offer);
    } catch (err) {
      next(err);
    }
  }
};