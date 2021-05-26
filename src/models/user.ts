import * as mongoose from 'mongoose';

const userValidators = require('../validators/user');
const uniqueValidator = require('mongoose-unique-validator')

export interface IUserMongoose {
    _id: mongoose.Types.ObjectId;
    username: string,
    password: string,
    email: string,
    createdAt: Date,
    jwt_session: string,
    paymentsId: mongoose.Types.ObjectId,
    sharedPaymentsId: mongoose.Types.ObjectId[]
}

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        minlength: 6
    },
    password: {
        type: String,
        minlength: 6
    },
    email: {
        type: String,
        unique: true,
        validate: userValidators.emailValidators
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    jwt_session: {
        type: String
    },
});

userSchema.plugin(uniqueValidator, { message: 'unique' });


const UserModel = mongoose.model('users', userSchema);

module.exports.userSchema = userSchema;
module.exports.UserModel = UserModel;
