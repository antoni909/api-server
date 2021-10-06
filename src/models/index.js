'use strict';
// imports
require('dotenv').config();

const Collection = require('../utils/collections-class');
const beer = require('../models/beer')

// connect to a db 
const DATABASE_URL = process.env.NODE_ENV === 'test'? 'sqlite:memory' : process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require('sequelize');
let sequelizeOptions = process.env.NODE_ENV === 'production'
    ? {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        }
    }
    : {};
// Create a working model
let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
let beerModel = beer(sequelize, DataTypes);
let collectionBeer = new Collection('beer', beerModel  );

module.exports = {
  db: sequelize,
  Beer: collectionBeer,
};
