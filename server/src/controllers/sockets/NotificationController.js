const WebSocket = require('./WebSocket');
const CONSTANTS = require('../../constants');

class NotificationController extends WebSocket{

  emitEntryCreated (target, message, contestId) {
    this.io.to(target).emit(CONSTANTS.NOTIFICATION_ENTRY_CREATED,
      { message, contestId });
  }

  emitChangeMark (target, message, contestId) {
    this.io.to(target).emit(CONSTANTS.NOTIFICATION_CHANGE_MARK,
      { message, contestId });
  }

  emitChangeOfferStatus (target, message, contestId) {
    this.io.to(target).emit(CONSTANTS.NOTIFICATION_CHANGE_OFFER_STATUS,
      { message, contestId });
  }
}

module.exports = NotificationController;
