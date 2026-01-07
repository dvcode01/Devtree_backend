import { model, Schema } from "mongoose";

export interface IUser {
    handle: string,
    email: string,
    nombre: string,
    password: string,
    description: string
};

const userSchema = new Schema({
    handle: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: ''
    }
});

const User = model<IUser>('User', userSchema);
export default User;