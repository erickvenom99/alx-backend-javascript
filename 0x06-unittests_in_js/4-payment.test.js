import sinon from 'sinon';
import { expect } from 'chai';
import Utils from './utils.js';
import sendPaymentRequestToApi from './4-payment.js';

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber to return 10', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Create console.log spy
    const consoleLogSpy = sinon.spy(console, 'log');
    // Call function with arguments
    sendPaymentRequestToApi(100, 20);
    // Assert to verify stub and spy behaviour
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the original functions
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
