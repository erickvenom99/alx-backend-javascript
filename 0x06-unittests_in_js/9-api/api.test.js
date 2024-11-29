// Api test
const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  before((done) => {
    app.listen(7865, () => {
      console.log('API available on localhost port 7865');
      done();
    });
  });

  after((done) => {
    app.close(() => {
      console.log('API closed');
      done();
    });
  });

  it('status code result', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  describe('Cart page', () => {
    it('correct status code when :id is a number', (done) => {
      const cartNumber = 123;
      request.get(`http://localhost:7865/cart/${cartNumber}`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(`Payment methods for cart ${cartNumber}`);
        done();
      });
    });

    it('correct status code when :id is NOT a number (=> 404)', (done) => {
      const invalidCartId = 'invalid';
      request.get(`http://localhost:7865/cart/${invalidCartId}`, (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});

