"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var userValidators = require('../validators/user');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        minlength: 6
    },
    password: {
        type: String,
        minlength: 6
    },
    email: {
        type: String,
        unique: true,
        validate: userValidators.emailValidators
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    jwt_session: {
        type: String
    },
    paymentsId: {
        type: String,
        default: new mongoose.mongo.ObjectId().toString()
    },
    sharedPaymentsId: {
        type: [String],
        default: []
    }
});
userSchema.plugin(uniqueValidator, { message: 'unique' });
var UserModel = mongoose.model('users', userSchema);
module.exports.userSchema = userSchema;
module.exports.UserModel = UserModel;
