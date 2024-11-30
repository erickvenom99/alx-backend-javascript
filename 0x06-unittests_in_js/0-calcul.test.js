const assert = require('assert');
const mocha = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the sum of numbers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1, -4), -3);
    });

    it('should round the number if provided with one argument', () => {
        assert.strictEqual(calculateNumber(9), 9);
        assert.strictEqual(calculateNumber(1.1), 1);
    });

    it('should round float numbers', () => {
        assert.strictEqual(calculateNumber(9, 1.3), 10);
        assert.strictEqual(calculateNumber(4.1, 2.7), 7);
        assert.strictEqual(calculateNumber(1.2, 3.1), 4);
        assert.strictEqual(calculateNumber(2.1, -5), -3);
    });

    it('should also transform and add non-integer strings', () => {
        assert.strictEqual(calculateNumber(1, '3.1'), 4);
        assert.strictEqual(calculateNumber('3.1', 1.7), 5);
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
