import { Request, Response } from "express";
import User from "../models/User";

const createAccount = async(req: Request, res: Response) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.json({msg: 'Usuario registrado correctamente'});
    } catch (error) {
        console.error(error);
    }
};


export {
    createAccount
}