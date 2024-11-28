const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 7 when adding 4 and 3', () => {
    assert.strictEqual(calculateNumber(4, 3), 7);
  });
  it('should return 5 when adding 1 and 4.2', () => {
    assert.strictEqual(calculateNumber(1, 4.2), 5);
  });
  it('should return 7 when adding 4.4 and 2.2', () => {
    assert.strictEqual(calculateNumber(4.4, 2.2), 7);
  });
  it('should return 6 when adding 4.3 and 2.1', () => {
    assert.strictEqual(calculateNumber(4.3, 2.1), 6);
  });
  it('should return 2 when adding -5.7 and 4.1', () => {
    assert.strictEqual(calculateNumber(-5.7, 4.1), -2);
  });
  it('should return -5 when adding 5.7 and -8.1', () => {
    assert.strictEqual(calculateNumber(5.7, -8.1), -2);
  });
  it('should return Infinity when adding positive infinity and 2.8', () => {
    assert.strictEqual(calculateNumber(Number.POSITIVE_INFINITY, 2.8), Infinity);
  });
  it('should return -Infinity when adding negative infinity and 2.8', () => {
    assert.strictEqual(calculateNumber(Number.NEGATIVE_INFINITY, 2.8), -Infinity);
  });
});

module.exports = app;

