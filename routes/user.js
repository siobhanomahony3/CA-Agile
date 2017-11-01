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

router.findOneUser = function(req, res) {

    user.find({ "_id" : req.params.id },function(err, user1) {
        if (err)
            res.json({ message: 'User NOT Found!', errmsg : err } );
        else
            res.json(user1);
    });
}

function getByValue(arr,id)
{
    var result;
    result= arr.filter(function (o) {
        return o.id==id;
    });

    return result ? result[0] : null;


}

router.addUser = function(req, res) {

    var user1 = new user();

    user1.firstname = req.body.firstname;
    user1.lastname = req.body.lastname;
    user1.username = req.body.username;
    user1.email = req.body.email;

    console.log('Adding User: ' + JSON.stringify(user1));

    user1.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'User Added!', data: user1 });
    });
}

router.updateUser = function(req, res) {

    user.findById(req.params.id, function (err, user1) {
        if (err)
            res.send(err);
        else {
            user1.username = req.body.username;
            user1.save(function (err) {
                if (err)
                    res.send(err);
                else
                    res.json({message: 'Username Updated!', data: user1});
            });
        }
    });
}

    router.deleteUser = function(req, res) {

        user.findByIdAndRemove(req.params.id, function(err) {
            if (err)
                res.send(err);
            else
                res.json({ message: 'User Deleted!'});
        });
    }




    module.exports = router;