let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');

let should = chai.should();
chai.use(chaiHttp);

describe('/GET hashtags, users, comments thru proxy', () => {
  it('it should GET all the hashtags', (done) => {
    chai.request(app)
        .get('/hashtags')
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });

  it('it should GET all the users', (done) => {
    chai.request(app)
        .get('/users')
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });

  it('it should GET all the comments', (done) => {
    chai.request(app)
        .get('/comments')
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });
});