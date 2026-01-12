import { model, Schema, Document } from "mongoose";

export interface IUser extends Document{
    handle: string,
    email: string,
    nombre: string,
    password: string,
    description: string,
    image: string,
    links: string
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
    },
    image: {
        type: String,
        default: ''
    },
    links: {
        type: String,
        default: ''
    }
});

const User = model<IUser>('User', userSchema);
export default User;