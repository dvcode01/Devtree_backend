import { Request, Response } from "express";
import slug from "slug";
import User from "../models/User";
import hashPassword, { checkPassword } from "../utils/auth";
import generateJWT from "../utils/jwt";

const createAccount = async(req: Request, res: Response) => {
    const { email, password } = req.body;
    const emailExist = await User.findOne({ email });

    if(emailExist){
        const error = new Error('Email de usuario ya registrado');
        return res.status(409).json({msg: error.message, error: true});
    }

    const handle = slug(req.body.handle, '');
    const handleExist = await User.findOne({ handle });

    if(handleExist){
        const error = new Error('Nombre de usuario no disponible');
        return res.status(409).json({msg: error.message, error: true});
    }
    
    const user = new User(req.body);
    user.password = await hashPassword(password);
    user.handle = handle;
    
    try {
        await user.save();
        res.status(201).json({msg: 'Usuario registrado correctamente'});
    } catch (error) {
        console.error(error);
    }
};

const login = async(req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if(!user){
        const error = new Error('Usuario no existe');
        return res.status(404).json({msg: error.message, error: true});
    }

    const isPasswordCorrect = await checkPassword(password, user.password);

    if(!isPasswordCorrect){
        const error = new Error('Password incorrecto');
        return res.status(401).json({msg: error.message, error: true});
    }

    const token = generateJWT({id: user._id});
    res.status(200).send(token);
}

const getUser = (req: Request, res: Response) => {
    res.json(req.user);
}


export {
    createAccount,
    login,
    getUser
}