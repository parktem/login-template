"use strict";
/*import { UserSigninModel }     from '../Domain/UserSigninModel';
import { UserSignin }          from './UserSignin';
import { UserSignupModel }     from '../Domain/UserSignupModel';
import { UserRepositoryMongo } from '../Infrastructure/UserRepositoryMongo';

const mockUser: UserDTO = {
    username: '',
    createdAt: '',
    jwtSession: '',
    email: '',
    id: '',
    paymentsId: '',
    sharedPaymentsId: []
}
const mockRepository: UserRepositoryMongo = {
    signin: (user: UserSigninModel): Promise<UserDTO> => {
        return Promise.resolve(mockUser);
    },
    signup: (user: UserSignupModel): Promise<UserDTO> => {
        return Promise.resolve(mockUser);
    }
}

test('Try to signin a non-valid user', () => {
    const userSignin = new UserSignin(mockRepository);
    return expect(userSignin.signin('', '', '')).rejects.toBe(null);
})

test('Try to signin a valid user', () => {
    const userSignin = new UserSignin(mockRepository);
    return expect(userSignin.signin('username', 'password', 'test@test.com')).resolves.toBe(mockUser);
})*/
