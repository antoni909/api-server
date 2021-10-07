'use strict';

// imports
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('../utils/collections-class');
const beer = require('../models/beer');

// connect to a db 
const POSTGRES_URI = 
    process.env.NODE_ENV === 'test'
    ? 'sqlite:memory' 
    : process.env.DATABASE_URL;

// console.log(' *** POSTGRES_URI : ', POSTGRES_URI)

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

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

let beerModel = beer(sequelize, DataTypes);

let collectionBeer = new Collection('Beer', beerModel  );

module.exports = {
  db: sequelize,
  Beer: collectionBeer,
};
