const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 7 when adding 4 and 3', () => {
      assert.strictEqual(calculateNumber('SUM', 4, 3), 7);
    });
    it('should return 5 when adding 1 and 4.2', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 4.2), 5);
    });
    it('should return 7 when adding 4.4 and 2.2', () => {
      assert.strictEqual(calculateNumber('SUM', 4.4, 2.2), 7);
    });
    it('should return 6 when adding 4.3 and 2.1', () => {
      assert.strictEqual(calculateNumber('SUM', 4.3, 2.1), 6);
    });
    it('should return -2 when adding -5.7 and 4.1', () => {
      assert.strictEqual(calculateNumber('SUM', -5.7, 4.1), -2);
    });
    it('should return -2 when adding 5.7 and -8.1', () => {
      assert.strictEqual(calculateNumber('SUM', 5.7, -8.1), -2);
    });
    it('should return Infinity when adding positive infinity and 2.8', () => {
      assert.strictEqual(calculateNumber('SUM', Number.POSITIVE_INFINITY, 2.8), Infinity);
    });
    it('should return -Infinity when adding negative infinity and 2.8', () => {
      assert.strictEqual(calculateNumber('SUM', Number.NEGATIVE_INFINITY, 2.8), -Infinity);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -5 when subtracting 10 from 5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 10), -5);
    });
    it('should return -5 when subtracting 5.7 from 1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 5.7), -5);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.25 when dividing 1 by 4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 4), 0.25);
    });
    it('should return Error when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });
  });
});
