"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryMongo = void 0;
var Mapper_1 = require("../../Utils/Mapper");
var jwt = require("../../security/jwt");
var UserModel = require('../../models/user').UserModel;
var UserRepositoryMongo = /** @class */ (function () {
    function UserRepositoryMongo() {
    }
    UserRepositoryMongo.prototype.signin = function (user) {
        return new Promise(function (resolve, reject) {
            UserModel.findOne({ email: user.email, password: user.password }, function (err, doc) {
                if (!err) {
                    if (doc) {
                        var jwt_session = jwt.generateJWT({ email: doc.email, username: doc.username });
                        UserModel.findByIdAndUpdate(doc.id, { jwt_session: jwt_session }, { new: true, useFindAndModify: true }, function (err, updatedDoc) {
                            var userToReturn = Mapper_1.Mapper.toSigninUserResDTO(updatedDoc);
                            resolve(userToReturn);
                        });
                    }
                    else {
                        reject(404);
                    }
                }
                else {
                    reject(null);
                }
            });
        });
    };
    UserRepositoryMongo.prototype.signup = function (user) {
        return new Promise(function (resolve, reject) {
            var userToSave = new UserModel({
                username: user.username,
                password: user.password,
                email: user.email,
                jwt_session: jwt.generateJWT({ username: user.username, email: user.email })
            });
            userToSave.save(function (err, doc) {
                if (!err) {
                    var userToReturn = Mapper_1.Mapper.toSignupUserResDTO(doc);
                    resolve(userToReturn);
                }
                else {
                    reject(null);
                }
            });
        });
    };
    return UserRepositoryMongo;
}());
exports.UserRepositoryMongo = UserRepositoryMongo;
