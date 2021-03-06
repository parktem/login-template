import { SignupUserResDTO }    from "../User/Domain/DTO/Output/SignupUserResDTO";
import { SigninUserResDTO }    from "../User/Domain/DTO/Output/SigninUserResDTO";

export class Mapper {

    static toSignupUserResDTO(doc: any): SignupUserResDTO {
        return {
            email: doc.email,
            jwtSession: doc.jwt_session,
            createdAt: doc.createdAt,
        };
    }

    static toSigninUserResDTO(doc: any): SigninUserResDTO {
        return {
            email: doc.email,
            jwtSession: doc.jwt_session,
            createdAt: doc.createdAt,
        };
    }
}
