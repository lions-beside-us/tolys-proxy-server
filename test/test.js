let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');

let should = chai.should();
chai.use(chaiHttp);

describe('/GET all hashtags, users, comments thru proxy', () => {
  it('it should GET all the hashtags', (done) => {
    chai.request(app)
        .get('/hashtags')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.data.should.be.a('array');
              res.body.data.length.should.equal(100);
          done();
        });
  });

  it('it should GET all the users', (done) => {
    chai.request(app)
        .get('/users')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.data.should.be.a('array');
              res.body.data.length.should.equal(10);
          done();
        });
  });

  it('it should GET all the comments', (done) => {
    chai.request(app)
        .get('/comments')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.data.should.be.a('array');
              res.body.data.length.should.be.gt(36); //gt is greater than
              res.body.data.length.should.be.below(201);
          done();
        });
  });
});

describe('/GET one hashtag, user, comment thru proxy', () => {
  it('it should GET one hashtag', (done) => {
    chai.request(app)
        .get('/hashtags/1')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.data.should.be.a('array');
              res.body.data.length.should.be.gte(1);
              res.body.data.length.should.be.below(7);
          done();
        });
  });

  it('it should GET one user', (done) => {
    chai.request(app)
        .get('/users/1')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.data.should.be.a('array');
              res.body.data.length.should.equal(1);
          done();
        });
  });

  it('it should GET one comment', (done) => {
    chai.request(app)
        .get('/comments/1')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.data[0].content.should.be.a('string');
          done();
        });
  });
});