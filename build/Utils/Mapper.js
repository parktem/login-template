"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
var Mapper = /** @class */ (function () {
    function Mapper() {
    }
    Mapper.toSignupUserResDTO = function (doc) {
        return {
            username: doc.username,
            email: doc.email,
            id: doc._id,
            jwtSession: doc.jwt_session,
            createdAt: doc.createdAt,
        };
    };
    Mapper.toSigninUserResDTO = function (doc) {
        return {
            username: doc.username,
            email: doc.email,
            id: doc._id,
            jwtSession: doc.jwt_session,
            createdAt: doc.createdAt,
        };
    };
    return Mapper;
}());
exports.Mapper = Mapper;
