"use strict";
var UserRepositoryMongo_1 = require("./UserRepositoryMongo");
var UserSignin_1 = require("../Application/UserSignin");
var UserSignup_1 = require("../Application/UserSignup");
var express_1 = require("express");
var userRouter = express_1.Router();
var userRepository = new UserRepositoryMongo_1.UserRepositoryMongo();
userRouter.post('/signin', function (req, res) {
    var userSignin = new UserSignin_1.UserSignin(userRepository);
    var _a = req.body, username = _a.username, password = _a.password, email = _a.email;
    var userReq = { username: username, password: password, email: email };
    userSignin.signin(userReq).then(function (user) {
        res.send(user);
    }, function () {
        res.send({ error: 'error' });
    });
});
userRouter.post('/signup', function (req, res) {
    var userSignup = new UserSignup_1.UserSignup(userRepository);
    var _a = req.body, username = _a.username, password = _a.password, email = _a.email;
    var userReq = { username: username, password: password, email: email };
    userSignup.signup(userReq).then(function (user) {
        res.send(user);
    }, function () {
        res.send({ error: 'error' });
    });
});
module.exports = userRouter;
