import { Repository }       from "../Domain/Repository";
import { UserSigninModel }  from "../Domain/UserSigninModel";
import { SigninUserResDTO } from "../Domain/DTO/Output/SigninUserResDTO";
import { SigninUserReqDTO } from "../Domain/DTO/Input/SigninUserReqDTO";

export class UserSignin {

    constructor(private _repository: Repository) {}

    async signin(userReq: SigninUserReqDTO): Promise<SigninUserResDTO> {
        const user: UserSigninModel = new UserSigninModel(userReq)
        if (!user.isValid()) {
            return Promise.reject(null);
        }
        return await this._repository.signin(user);
    }
}
