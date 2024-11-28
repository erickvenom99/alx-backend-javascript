const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 7 when adding 4 and 3', () => {
      expect(calculateNumber('SUM', 4, 3)).to.equal(7);
    });
    it('should return 5 when adding 1 and 4.2', () => {
      expect(calculateNumber('SUM', 1, 4.2)).to.equal(5);
    });
    it('should return 7 when adding 4.4 and 2.2', () => {
      expect(calculateNumber('SUM', 4.4, 2.2)).to.equal(7);
    });
    it('should return 6 when adding 4.3 and 2.1', () => {
      expect(calculateNumber('SUM', 4.3, 2.1)).to.equal(6);
    });
    it('should return -2 when adding -5.7 and 4.1', () => {
      expect(calculateNumber('SUM', -5.7, 4.1)).to.equal(-2);
    });
    it('should return -2 when adding 5.7 and -8.1', () => {
      expect(calculateNumber('SUM', 5.7, -8.1)).to.equal(-2);
    });
    it('should return Infinity when adding positive infinity and 2.8', () => {
      expect(calculateNumber('SUM', Number.POSITIVE_INFINITY, 2.8)).to.equal(Infinity);
    });
    it('should return -Infinity when adding negative infinity and 2.8', () => {
      expect(calculateNumber('SUM', Number.NEGATIVE_INFINITY, 2.8)).to.equal(-Infinity);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -5 when subtracting 10 from 5', () => {
      expect(calculateNumber('SUBTRACT', 5, 10)).to.equal(-5);
    });
    it('should return -5 when subtracting 5.7 from 1', () => {
      expect(calculateNumber('SUBTRACT', 1, 5.7)).to.equal(-5);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.25 when dividing 1 by 4', () => {
      expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
    });
    it('should return Error when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });
  });
});

