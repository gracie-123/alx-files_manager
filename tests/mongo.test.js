import dbClient from '../utils/db';

const assert = require('assert');

describe('mongoDB', () => {
  it('isAlive', async () => {
    assert.equal(true, dbClient.isAlive());
  });

  it('nbUsers', async () => {
    assert.equal(true, await dbClient.nbUsers() >= 0);
  });
  it('nbFiles', async () => {
    assert.equal(true, await dbClient.nbFiles() >= 0);
  });
});
