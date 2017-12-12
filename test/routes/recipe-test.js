var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;
var recipe = require('../../models/recipe');
chai.use(chaiHttp);
var _ = require('lodash' );

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/recipe');
    var db = mongoose.connection;

    db.on('error', function (err) {
        console.log('connection error', err);
    });
    db.once('open', function () {
        console.log('connected to database');
    });

    describe('Recipe', function (){
        beforeEach(function (done) {

            recipe.remove({}, function (err) {

                if (err)
                    done(err);
                else {
                    var recipe1 = new recipe();

                    recipe1._id = "59ff4145fd904f7cc33c4cb6";
                    recipe1.recipename = "Carbonara";
                    recipe1.recipetype = "Italian";
                    recipe1.ingredients = "1Tbsp olive oil or unsalted butter, 1/2 pound pancetta or thick cut bacon, diced, 1-2 garlic cloves, miced about 1 teaspoon, 3-4 wole eggs, 1 cup grated parmesan or pecorino cheese, 1 pound spaghetti pasta";
                    recipe1.rating= 2;




                    recipe1.save(function (err) {
                        if (err)
                            console.log(err);
                        else {
                            var recipe2 = new recipe();

                            recipe2._id = "59ff9a44a00a3e02ba392942";
                            recipe2.recipename = "Steak";
                            recipe2.recipetype = "American";
                            recipe2.ingredients = "Beef";
                            recipe2.rating= 3;


                            recipe2.save(function (err) {
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


        describe('GET /recipe', function () {
        it('should return all the recipes in an database', function(done) {
            chai.request(server)
                .get('/recipe')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');

                    done();
                });
        });
    });
    describe('POST /addrecipe', function () {
        it('should return confirmation message and update collection', function(done) {
            var recipe = {
                recipename: 'Steak' ,
                recipetype: 'American',
                ingredients: 'Beef',
                rating: 3
            };
            chai.request(server)
                .post('/addrecipe')
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
                .get('/recipe/59ff9a44a00a3e02ba392942')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                    done();
                });
        });
    });
        describe('DELETE /recipe/id', function () {
            it('should delete the recipe from the collection', function(done) {

                chai.request(server)
                    .delete('/recipe/59ff4145fd904f7cc33c4cb6')
                    .send(recipe)
                    .end(function(err, res) {
                        expect(res).to.have.status(200);
                        expect(res.body).to.have.property('message').equal('Recipe Deleted!' ) ;
                        done();
                    });
            });
        });

        describe('PUT /recipe/id/update', function () {
            it('should update the ingredients in the recipe collection', function(done) {
                var recipe = {
                    rating: 5
                };
                chai.request(server)
                    .put('/recipe/59ff9a44a00a3e02ba392942/update')
                    .send(recipe)
                    .end(function(err, res) {
                        expect(res).to.have.status(200);
                        expect(res.body).to.have.property('message').equal('Ingredients Updated!' ) ;
                        done();
                    });
            });
        });

});