"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
var jwt = require("./jwt");
/*const PATH_WITHOUT_JWT: [string, string][] = [
    ['/users/signup', '*'],
    ['/users/signin', '*']
]*/
var PATH_WITHOUT_JWT = ['/users/signup', '/users/signin', 'ping'];
function middleware(req, res, next) {
    if (!PATH_WITHOUT_JWT.includes(req.path)) {
        if (req.headers && req.headers.authorization) {
            var token = req.headers.authorization.split(" ")[1];
            jwt.verifyJWT(token).then(function (res) {
                if (res) {
                    next();
                }
                else {
                    res.status(401).send();
                }
            }, function () {
                res.status(401).send();
            });
        }
        else {
            res.status(401).send();
        }
    }
    else {
        next();
    }
}
exports.middleware = middleware;
function needsJWT(req) {
    for (var pathWithoutJWT in PATH_WITHOUT_JWT) {
        return pathWithoutJWT[0] === req.path &&
            (pathWithoutJWT[1] === '*' ||
                pathWithoutJWT[1] === (req.method));
    }
    return false;
}
