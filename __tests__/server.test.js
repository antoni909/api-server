'use strict';

require('dotenv').config();

const server = require('../src/server.js');
const { db } = require('../src/models/index')
const supertest = require('supertest');
const request = supertest(server.app);

// Tom : https://github.com/MuckT/basic-api-server/blob/dev/src/routes/clothes.test.js

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('web server', () => {

  it('should respond with a 404 on an invalid method', async () => {
    const response = await request.put('/hello');
    expect(response.status).toBe(404);
  });

  it('can add a record', async () => {
    const response = await 

  });

  it('can get a list of records', async () => {

  });

  it('can get a record', async () => {

  });

  it('can update a record', async () => {

  });

  it('can delete a record', async () => {

  });

});
