import { UserRepositoryMongo } from "./UserRepositoryMongo";
import { UserSignin } from "../Application/UserSignin";
import { UserSignup }       from "../Application/UserSignup";
import { Router }           from "express";
import { SignupUserReqDTO } from "../Domain/DTO/Input/SignupUserReqDTO";
import { SigninUserReqDTO } from "../Domain/DTO/Input/SigninUserReqDTO";
import { SignupUserResDTO } from "../Domain/DTO/Output/SignupUserResDTO";
import { SigninUserResDTO } from "../Domain/DTO/Output/SigninUserResDTO";

const userRouter = Router();
const userRepository = new UserRepositoryMongo();

userRouter.post('/signin', (req, res) => {
    const userSignin = new UserSignin(userRepository);
    const { email, password } = req.body;
    const userReq: SigninUserReqDTO = { email, password }
    userSignin.signin(userReq).then( (user: SigninUserResDTO) => {
        res.send(user);
    }, () => {
        res.send({error: 'error'})
    });
})

userRouter.post('/signup', (req, res) => {
    const userSignup = new UserSignup(userRepository);
    const { email, password } = req.body;
    const userReq: SignupUserReqDTO = { email, password }
    userSignup.signup(userReq).then( (user: SignupUserResDTO) => {
        res.send(user);
    }, () => {
        res.send({error: 'error'})
    });
})

export = userRouter;
