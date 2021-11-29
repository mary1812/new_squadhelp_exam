'use strict';
const { Model } = require('sequelize');
const { OFFER_STATUSES } = require('../constants');
module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    static associate({ User, Contest, Rating }) {
      Offer.belongsTo(User, { foreignKey: 'userId', sourceKey: 'id' });
      Offer.belongsTo(Contest, {
        foreignKey: 'contestId',
        sourceKey: 'id',
      });
      Offer.hasOne(Rating, { foreignKey: 'offerId', targetKey: 'id' });
    }
  }
  Offer.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contestId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
      },
      fileName: {
        type: DataTypes.STRING,
      },
      originalFileName: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM(...Object.values(OFFER_STATUSES)),
        defaultValue: OFFER_STATUSES.PENDING,
      },
    },
    {
      sequelize,
      modelName: 'Offer',
      timestamps: false
    }
  );
  return Offer;
};
