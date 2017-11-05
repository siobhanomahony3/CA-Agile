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
                    expect(res.body.length).to.equal(16);
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
    describe('GET /recipe/id', function () {
        it('should return a recipe from the collection', function(done) {
            chai.request(server)
                .get('/recipe/59fa2697af2318fecc2a604b')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                    done();
                });
        });
    });
    describe(' /DELETE/recipe/:id', function ()  {
        it('should delete a object from recipe with given id', function(done) {
            beforeEach(function(){
                while(recipe.length > 0) {
                    recipe.pop();
                }
                recipe.push(
                    {id: '59ff8ac680cbf201ed59bb3d', recipename: 'Steak', recipetype: 'American', ingredients: 'Beef', rating:3}
                );

            });
            chai.request(server)
                .delete('/recipe/59ff8ac680cbf201ed59bb3d')
                .end(function(err, res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                });
            done();
        });
    });

});