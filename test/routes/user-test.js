var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );

describe('User', function (){


    describe('GET /user', function () {
        it('should return all the user in the collection', function(done) {
            chai.request(server)
                .get('/user')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(35);
                    done();
                });
        });
    });
    describe('POST /user', function () {
        it('should return add user to the collection', function(done) {
            var user = {
                firstname: 'Ciara' ,
                lastname: 'Murphy',
                username: 'cmurphy4',
                email: 'ciaram@hotmail.com'
            };
            chai.request(server)
                .post('/user')
                .send(user)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('User Added!' ) ;
                    done();
                });
        });
    });

    describe('GET /user/id', function () {
        it('should return one user from the collection', function(done) {
            chai.request(server)
                .get('/user/59ff7506428bec05702d67c9')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                    done();
                });
        });
    });

    describe('DELETE /user/id', function () {
        it('should delete the user from the collection', function(done) {

            chai.request(server)
                .delete('/user/5a002a9b95cc1f044f6d1e2d')
                .send(user)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('User Deleted!' ) ;
                    done();
                });
        });
    });


    describe('PUT /user/id/username', function () {
        it('should update the user in the collection', function(done) {
            var user = {
                username: 'cmurphy45'
            };
            chai.request(server)
                .put('/user/5a001ba3f26d7403cd80a804/username')
                .send(user)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Username Updated!' ) ;
                    done();
                });
        });
    });

});
