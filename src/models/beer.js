'use strict'

const Beer = (sequelize, DataTypes) => sequelize.define('Beer',{
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Beer;
