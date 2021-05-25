"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.verifyJWT = exports.generateJWT = void 0;
var jwt = require("jsonwebtoken");
var key = require('./key').key;
var UserModel = require('../models/user').UserModel;
function generateJWT(payload, expiresIn) {
    if (payload === void 0) { payload = {}; }
    if (expiresIn === void 0) { expiresIn = "1h"; }
    return jwt.sign(payload, key, { expiresIn: expiresIn });
}
exports.generateJWT = generateJWT;
function verifyJWT(token) {
    return new Promise(function (resolve, reject) {
        if (token) {
            jwt.verify(token, key, function (err, decoded) {
                if (!err) {
                    UserModel.findOne({ email: decoded.email, jwt_session: token }, function (err, doc) {
                        if (!err) {
                            if (doc) {
                                resolve(true);
                            }
                            else {
                                reject(null);
                            }
                        }
                        else {
                            reject(null);
                        }
                    });
                }
                else {
                    reject(null);
                }
            });
        }
        else {
            reject(null);
        }
    });
}
exports.verifyJWT = verifyJWT;
function decodeToken(token) {
    return jwt.decode(extractBearer(token));
}
exports.decodeToken = decodeToken;
function extractBearer(token) {
    var extractedToken = token.split(" ")[1];
    return extractedToken || token;
}
