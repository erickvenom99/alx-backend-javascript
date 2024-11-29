// Test module for calculateNumber

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(2.4, 3.5), 6);
  });

  it('should work with zero values', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should round and sum large numbers', () => {
    assert.strictEqual(calculateNumber(1000000.4, 999999.5), 2000000);
  });
});
