var recipe = require('../models/recipe');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/recipes');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function () {
    console.log('connected to database');
});

router.findAll = function(req, res) {
    recipe.find(function(err, recipes) {
        if (err)
            res.send(err);

        res.json(recipes);
    });
}

router.addRecipe = function(req, res) {

    var recipes = new recipe();

    recipes.recipename = req.body.recipename;
    recipes.recipetype = req.body.recipetype;
    recipes.ingredients = req.body.ingredients;
    recipes.rating = req.body.rating;

    console.log('Adding Recipe: ' + JSON.stringify(recipes));

    recipes.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Recipe Added!', data: recipes });
    });
}


module.exports = router;