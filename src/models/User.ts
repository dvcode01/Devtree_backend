import { model, Schema } from "mongoose";

interface IUser {
    email: string,
    nombre: string,
    password: string
};

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
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