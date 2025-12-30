import { model, Schema } from "mongoose";

interface IUser {
    handle: string,
    email: string,
    nombre: string,
    password: string
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
    }
});

const User = model<IUser>('User', userSchema);
export default User;