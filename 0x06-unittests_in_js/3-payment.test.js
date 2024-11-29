import sinon from 'sinon';
import { expect } from 'chai';
import Utils from './utils.js';
import sendPaymentRequestToApi from './3-payment.js';

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    const sumSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(sumSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(sumSpy.returnValues[0]).to.equal(120);
    sumSpy.restore();
  });
});
