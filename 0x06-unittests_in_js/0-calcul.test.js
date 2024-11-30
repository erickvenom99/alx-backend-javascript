const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the rounded sum of two round numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return the sum of both numbers (int, float)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return the rounded sum of one integer and one negative number', () => {
    assert.strictEqual(calculateNumber(1, -4), -3);
  });

  it('should return the number in the argument if only one number', () => {
    assert.strictEqual(calculateNumber(9), 9);
  });
  it('should return the number in the argument if it has only one floating argument', () => {
    assert.strictEqual(calculateNumber(1.1), 1);
  });

  it('should round the sum if one argument has an integer and the other a float', () => {
    assert.strictEqual(calculateNumber(9, 1.3), 10);
  });
  it('should return the sum of two floating numbers', () => {
    assert.strictEqual(calculateNumber(4.1, 2.7), 7);
  });
  it('should return the sum of first argument is a float and the other a negative no', () => {
    assert.strictEqual(calculateNumber(2.1, -5), -3);
  });

  it('should also transform and round the sum of non-integer strings', () => {
    assert.strictEqual(calculateNumber(1, '3.1'), 4);
  });
  it('should also transform and round the sum of non-integer strings (string + integer)', () => {
    assert.strictEqual(calculateNumber('3.1', 1.7), 5);
  });
  it('should also transform and round the sum of non-integer strings (string + integer)', () => {
    assert.strictEqual(calculateNumber(1, true), 2);
  });

  it('should throw TypeError if either parameter cannot be coerced to a number', () => {
    assert.throws(() => calculateNumber('holberton'), {
      name: 'TypeError',
      message: 'Both arguments must be numbers'
    });
    assert.throws(() => calculateNumber(6.6, 'merry'), {
      name: 'TypeError',
      message: 'Both arguments must be numbers'
    });
  });
});
