import { UserSignupModel }  from "./UserSignupModel";
import { UserSigninModel }  from "./UserSigninModel";
import { SignupUserResDTO } from "./DTO/Output/SignupUserResDTO";
import { SigninUserResDTO } from "./DTO/Output/SigninUserResDTO";

export interface Repository {

    signup(user: UserSignupModel): Promise<SigninUserResDTO>;

    signin(user: UserSigninModel): Promise<SignupUserResDTO>;
}
