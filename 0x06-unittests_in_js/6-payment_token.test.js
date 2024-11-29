// 6-payment_to
import { expect } from 'chai';
import getPaymentTokenFromAPI from './6-payment_token.js';

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with a successful response', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
