import { Repository }       from "../Domain/Repository";
import { UserSignupModel }  from "../Domain/UserSignupModel";
import { UserSigninModel }  from "../Domain/UserSigninModel";
import { Mapper }           from "../../Utils/Mapper";
import { SignupUserResDTO } from "../Domain/DTO/Output/SignupUserResDTO";
import { SigninUserResDTO } from "../Domain/DTO/Output/SigninUserResDTO";
import * as jwt             from "../../security/jwt";

const UserModel = require('../../models/user').UserModel;

export class UserRepositoryMongo implements Repository {

    constructor() {}

    signin(user: UserSigninModel): Promise<SigninUserResDTO> {
        return new Promise((resolve, reject) => {
            UserModel.findOne( {email: user.email, password: user.password}, (err, doc) => {
                if (!err) {
                    if (doc) {
                        const jwt_session = jwt.generateJWT({email: doc.email, username: doc.username});
                        UserModel.findByIdAndUpdate(doc.id, { jwt_session }, { new: true, useFindAndModify: true }, (err, updatedDoc) => {
                            const userToReturn: SigninUserResDTO = Mapper.toSigninUserResDTO(updatedDoc);
                            resolve(userToReturn)
                        })
                    } else {
                        reject(404);
                    }
                } else {
                    reject(null);
                }
            })
        })
    }

    signup(user: UserSignupModel): Promise<SignupUserResDTO> {
        return new Promise((resolve, reject) => {
            const userToSave = new UserModel({
                username: user.username,
                password: user.password,
                email: user.email,
                jwt_session: jwt.generateJWT({username: user.username, email: user.email})
            });
            userToSave.save( (err, doc) => {
                if (!err) {
                    const userToReturn: SignupUserResDTO = Mapper.toSignupUserResDTO(doc)
                    resolve(userToReturn);
                } else {
                    reject(null);
                }
            })
        })
    }

}
