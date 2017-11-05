var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );

describe('Recipe', function (){
    describe('GET /recipe', function () {
        it('should return all the recipes in an database', function(done) {
            chai.request(server)
                .get('/recipe')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(6);
                    done();
                });
        });
    });
    describe('POST /recipe', function () {
        it('should return confirmation message and update collection', function(done) {
            var recipe = {
                recipename: 'Steak' ,
                recipetype: 'American',
                ingredients: 'Beef',
                rating: 3
            };
            chai.request(server)
                .post('/recipe')
                .send(recipe)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Recipe Added!' ) ;
                    done();
                });
        });
    });



});