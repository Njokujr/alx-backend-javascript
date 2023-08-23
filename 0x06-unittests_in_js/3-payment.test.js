const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const payReq = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(payReq.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(payReq.calculateNumber.callCount).to.be.equal(1);
    payReq.calculateNumber.restore();
  });
});