import { Request, Response } from "express";
import User from "../models/User";

const createAccount = async(req: Request, res: Response) => {
    const { email } = req.body;
    const emailExist = await User.findOne({ email });

    if(emailExist){
        const error = new Error('Usuario ya registrado');
        return res.status(409).json({msg: error.message, error: true});
    }
    
    const user = new User(req.body);
    
    try {
        await user.save();
        res.status(201).json({msg: 'Usuario registrado correctamente'});
    } catch (error) {
        console.error(error);
    }
};


export {
    createAccount
}