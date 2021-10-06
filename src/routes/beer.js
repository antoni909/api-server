'use strict'

const express = require('express');
const { Beer } = require('../models/index');
const router = express.Router();

//REST route declarations
router.get('/beer', getBeer);
router.get('/beer/:id', getOneBeer);
router.post('/beer/', createBeer);
router.put('/beer/:id',updateBeer);
router.delete('/beer/:id',deleteBeer);

// REST route handlers
async function getBeer(req,res){

  let allBeer = await Beer.findAll();

  console.log('***beer FOUND: ', allbeer)
  res.status(200).json(allBeer)

}

async function createBeer(req,res){

  let beerData = req.body;
  let beer = await Beer.create(beerData);

  console.log(`***beer: ${beer} CREATED`);
  res.status(200).json(beer);

}

async function getOneBeer(req,res){

  const id = parseInt(req.params.id);
  let beer = await Beer.findOne({ where:{id:id} });
  
  console.log(`***ONE beer: ${beer} FOUND: `, beer)
  res.status(200).json(beer);

}

async function updateBeer(req,res){
  const beerId = parseInt(req.params.id);
  const beerObject = req.body;

  const beerData = await beer.findOne({ where: {id:beerId}} );
  let updatedBeer = await beerData.update(beerObject);

  res.status(200).send(updatedBeer);
}

async function deleteBeer(req,res){
  const id = parseInt(req.params.id);
  let deletedBeer = await Beer.destroy({ where: { id:id } } );
  console.log(`***beer ${deletedBeer} DELETED: `, deletedBeer)
  res.status(204).json(deletedBeer);
}

module.exports = router;
