const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    const sumSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(sumSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(sumSpy.returnValues[0]).to.equal(120);
    sumSpy.restore();
  });
});
