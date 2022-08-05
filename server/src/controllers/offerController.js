const { Offer } = require("../models");
const ServerError = require("../errors/ServerError");
const CONSTANTS = require('../constants');
const contestQueries = require("./queries/contestQueries");
const userQueries = require("./queries/userQueries");
const mailCli = require("./../api/email/sendEmail");

module.exports.getPendingOffers = async (req, res, next) => {
  try {
    let count = await Offer.findAll({
      where: { status: CONSTANTS.OFFER_STATUSES.PENDING },
    });
    let offers = await Offer.findAll({
      where: { status: CONSTANTS.OFFER_STATUSES.PENDING },
      limit: req.body.limit,
      offset: req.body.offset ? req.body.offset : 0,
    });
    res.send({offers: offers, count: count.length});
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

const foundUser = async (userId) => {
  const user = await userQueries.findUser({ id: userId })
  return user;
}


module.exports.setOfferStatusByModerator = async (req, res, next) => {
  let transaction;
  if (req.body.command === CONSTANTS.OFFER_STATUSES.VOIDED) {
    try {
      const offer = await voidOffer(
        req.body.offerId,
        req.body.creatorId,
        req.body.contestId
      );
      const user = await foundUser(req.body.creatorId)
      mailCli.sendEmail(user.email, user.firstName, req.body.offerId, req.body.contestId, CONSTANTS.OFFER_STATUSES.VOIDED)
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
      const user = await foundUser(req.body.creatorId)
      mailCli.sendEmail(user.email, user.firstName, req.body.offerId, req.body.contestId, CONSTANTS.OFFER_STATUSES.VERIFIED)
      res.send(offer);
    } catch (err) {
      next(err);
    }
  }
};