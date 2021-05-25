import * as jwt from 'jsonwebtoken';
import { VerifyErrors } from "jsonwebtoken";
const { key } = require('./key');
const UserModel = require('../models/user').UserModel;

export function generateJWT(payload = {}, expiresIn = "1h") {
    return jwt.sign(payload, key, { expiresIn });
}

export function verifyJWT(token: string) {
    return new Promise((resolve, reject) => {
        if (token) {
            jwt.verify(token, key, (err: VerifyErrors | null, decoded: any ) => {
                if (!err) {
                    UserModel.findOne( {email: decoded.email, jwt_session: token}, (err: any, doc: any) => {
                        if (!err) {
                            if (doc) {
                                resolve(true)
                            } else {
                                reject(null)
                                ;
                            }
                        } else {
                            reject(null);
                        }
                    })
                } else {
                    reject(null);
                }
            });
        } else {
            reject(null);
        }
    })
}

export function decodeToken(token: string) {
    return jwt.decode(extractBearer(token));
}

function extractBearer(token: string): string {
    let extractedToken = token.split(" ")[1];
    return extractedToken || token;
}
