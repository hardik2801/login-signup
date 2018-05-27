var async = require('async');
var mongoose = require('mongoose');
var ResponseUtils = appRequire('utils.response');
var request = require("request");
var async = require('async');

var passport = require('passport');
var config = appRequire('config');
require('../login.google.js')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var User = appRequire("model.users");
var emailUtils = appRequire('utils.email');

function signup(req, res) {
    // console.log(req.body, 'request');
    if (!req.body.email || !req.body.password) {
        return res.json(ResponseUtils.responseMessage(false, 'Please pass email and password.'));
    } else {
        var newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            timezone: req.body.timezone
        });
        // save the user
        newUser.save(function (err) {
            if (err) {
                if (err.code == 11000) {
                    console.log(err);
                    return res.json(ResponseUtils.responseMessage(false, 'email already exists'));
                } else {
                    console.log(err);
                    return res.json(ResponseUtils.responseMessage(false, 'error in saving'));
                }
            }
            var message = "<div style='text-transform: capitalize; color: black;'>Hi " + newUser.name + ",</div> <div style='color: black;'><br/>Thank you for signing up and welcome to CoutLoot.</div>";
            emailUtils.sendEmails([newUser.email], "CoutLoot Signup", message, function (error) {
                if (error) {
                    return res.json(ResponseUtils.responseError(error));
                }

                return res.json(ResponseUtils.responseMessage(true, 'Successful created new user.'));
            });
        });
    }
}

function login(req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }

        if (!user) {
            // setTimeout(() => {
            return res.json(ResponseUtils.responseMessage(false, 'User Not Found'));
            // }, 5000);
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (!err && isMatch) {
                    // if user is found and password is right create a token
                    var token = jwt.sign(user.toJSON(), config.secret);
                    // return the information including token as JSON
                    var data = {
                        token: token,
                        user: {
                            email: user.email,
                            name: user.name,
                            timezone: user.timezone,
                            reservations: user.reservations,
                            _id: user._id
                        }
                    };
                    return res.json(ResponseUtils.responseMessage(true, 'Logged In', data));
                } else {
                    return res.json(ResponseUtils.responseMessage(false, 'wrong Username or password'));
                    // res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
}

function getUser(req, res) {
    var userId = req.params.id;
    User.findById(userId).select('name _id timezone reservations email').exec(function (err, user) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }
        return res.json(ResponseUtils.responseMessage(true, 'success', user));
    });
}

module.exports = {
    signup: signup,
    login: login,
    getUser: getUser
};