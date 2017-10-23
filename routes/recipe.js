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




module.exports = router;