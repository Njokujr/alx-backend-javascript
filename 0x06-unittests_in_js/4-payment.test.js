const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const payReq = sinon.spy(console);
    const useCase = sinon.stub(Utils, 'calculateNumber');

    useCase.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(useCase.calledWith('SUM', 100, 20)).to.be.true;
    expect(useCase.callCount).to.be.equal(1);
    expect(payReq.log.calledWith('The total is: 10')).to.be.true;
    expect(payReq.log.callCount).to.be.equal(1);
    useCase.restore();
    payReq.log.restore();
  });
});