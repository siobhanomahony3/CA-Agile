var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;
var user = require('../../models/user');

chai.use(chaiHttp);
var _ = require('lodash' );


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function () {
    console.log('connected to database');
});

describe('User', function (){
    beforeEach(function (done) {

        user.remove({}, function (err) {

            if (err)
                done(err);
            else {
                var user1 = new user();

                user1._id = "5a001ba3f26d7403cd80a804";
                user1.firstname = "Cara";
                user1.lastnight = "Murphy";
                user1.username = "cmurphy4";
                user1.email= "ciaram@hotmail.com";




                user1.save(function (err) {
                    if (err)
                        console.log(err);
                    else {
                        var user2 = new user();

                        user2._id = "5a017e588b183e051c279f98";
                        user2.firstname = "Cara";
                        user2.lastnight = "Murphy";
                        user2.username = "cmurphy4";
                        user2.email= "ciaram@hotmail.com";


                        user2.save(function (err) {
                            if (err)
                                console.log(err);
                            else {
                                done();
                            }
                        });
                    }
                });
            }
        });
    });




    describe('GET /user', function () {
        it('should return all the user in the collection', function(done) {
            chai.request(server)
                .get('/user')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(2);
                    done();
                });
        });
    });
    // describe('POST /user', function () {
    //     it('should return add user to the collection', function(done) {
    //         var user = {
    //             firstname: 'Ciara' ,
    //             lastname: 'Murphy',
    //             username: 'cmurphy4',
    //             email: 'ciaram@hotmail.com'
    //         };
    //         chai.request(server)
    //             .post('/user')
    //             .send(user)
    //             .end(function(err, res) {
    //                 expect(res).to.have.status(200);
    //                 expect(res.body).to.have.property('message').equal('User Added!' ) ;
    //                 done();
    //             });
    //     });
    // });

    describe('GET /user/id', function () {
        it('should return one user from the collection', function(done) {
            chai.request(server)
                .get('/user/5a017e588b183e051c279f98')
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
                .delete('/user/5a001ba3f26d7403cd80a804')
                .send(user)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('User Deleted!' ) ;
                    done();
                });
        });
    });


    // describe('PUT /user/id/username', function () {
    //     it('should update the user in the collection', function(done) {
    //         var user = {
    //             username: 'cmurphy45'
    //         };
    //         chai.request(server)
    //             .put('/user/5a017e588b183e051c279f98/username')
    //             .send(user)
    //             .end(function(err, res) {
    //                 expect(res).to.have.status(200);
    //                 expect(res.body).to.have.property('message').equal('Username Updated!' ) ;
    //                 done();
    //             });
    //     });
    // });

});
