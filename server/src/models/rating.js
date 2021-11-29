'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate({ User, Offer }) {
      Rating.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });
      Rating.belongsTo(Offer, {
        foreignKey: 'offerId',
        targetKey: 'id',
      });
    }
  }
  Rating.init(
    {
      offerId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      mark: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 5,
        },
      },
    },
    {
      sequelize,
      modelName: 'Rating',
      timestamps: false,
    }
  );
  return Rating;
};
