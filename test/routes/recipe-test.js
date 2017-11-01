var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );

describe('Recipe', function (){
    // TODO
});

describe('Recipe', function (){
    describe('GET /recipe', function () {
        it('should return all the recipes in an database', function(done) {
            chai.request(server)
                .get('/recipe')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(2);
                    done();
                });
        });
    });

});