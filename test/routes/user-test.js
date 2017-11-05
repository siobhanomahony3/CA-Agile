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
                    expect(res.body.length).to.equal(5);
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

    describe(' /DELETE/user/:id', function ()  {
        it('should delete a object from user with given id', function(done) {
            beforeEach(function(){
                while(user.length > 0) {
                    user.pop();
                }
                user.push(
                    {id: '59ff9bb47d67aa02c932e998', firstname: 'Ciara', lastname: 'Murphy', username: 'cmurphy4', email:'ciaram@hotmail'}
                );

            });
            chai.request(server)
                .delete('/user/59ff9bb47d67aa02c932e998')
                .end(function(err, res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                });
            done();
        });
    });
});
