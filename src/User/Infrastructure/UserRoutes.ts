import { UserRepositoryMongo } from "./UserRepositoryMongo";
import { UserSignin } from "../Application/UserSignin";
import { UserSignup }       from "../Application/UserSignup";
import { Router }           from "express";
import { SignupUserReqDTO } from "../Domain/DTO/Input/SignupUserReqDTO";
import { SignupUserResDTO } from "../Domain/DTO/Output/SignupUserResDTO";
import { SigninUserResDTO } from "../Domain/DTO/Output/SigninUserResDTO";

const userRouter = Router();
const userRepository = new UserRepositoryMongo();

userRouter.post('/signin', (req, res) => {
    const userSignin = new UserSignin(userRepository);
    const { username, password, email } = req.body;
    const userReq: SignupUserReqDTO = { username, password, email }
    userSignin.signin(userReq).then( (user: SigninUserResDTO) => {
        res.send(user);
    }, () => {
        res.send({error: 'error'})
    });
})

userRouter.post('/signup', (req, res) => {
    const userSignup = new UserSignup(userRepository);
    const { username, password, email } = req.body;
    const userReq: SignupUserReqDTO = { username, password, email }
    userSignup.signup(userReq).then( (user: SignupUserResDTO) => {
        res.send(user);
    }, () => {
        res.send({error: 'error'})
    });
})

export = userRouter;
