const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    const sumSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(sumSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(sumSpy.calledWithExactly('SUM', 100, 20)).to.be.true;
    expect(sumSpy.returnValues[0]).to.equal(120);
    expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(120);
    sumSpy.restore();
  });

  it('should sum and log the correct total', () => {
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
    consoleSpy.restore();
  });
});
