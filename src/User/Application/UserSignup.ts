import { Repository }       from "../Domain/Repository";
import { UserSignupModel }  from "../Domain/UserSignupModel";
import { SignupUserReqDTO } from "../Domain/DTO/Input/SignupUserReqDTO";
import { SignupUserResDTO } from "../Domain/DTO/Output/SignupUserResDTO";

export class UserSignup {

    constructor(private _repository: Repository) {}

    async signup(userReq: SignupUserReqDTO): Promise<SignupUserResDTO> {
        const user: UserSignupModel = new UserSignupModel(userReq)
        if (!user.isValid()) {
            return Promise.reject(null);
        }
        return await this._repository.signup(user);
    }
}
