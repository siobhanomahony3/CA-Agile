var user = require('../models/user');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');



router.findAllUsers = function(req, res) {
    user.find(function(err, user1) {
        if (err)
            res.send(err);

        res.json(user1);
    });
}








module.exports = router;