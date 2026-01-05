import { Request, Response } from "express";
import slug from "slug";
import { verify } from "jsonwebtoken";
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

const getUser = async(req: Request, res: Response) => {
    const bearer = req.headers.authorization;

    if(!bearer){
        const error = new Error('No Autorizado');
        return res.status(401).json({error: error.message});
    }

    const [, token] = bearer.split(' ');
    
    if(!token){
        const error = new Error('No Autorizado');
        return res.status(401).json({error: error.message});
    }

    try {
        const result = verify(token, process.env.SECRET_JWT);
        
        if(typeof result === 'object' && result.id){
            const user = await User.findById(result.id).select('handle nombre email');

            if(!user){
                const error = new Error('El usuario no existe');
                return res.status(404).json({error: error.message});
            }

            res.json(user);
        }
        
    } catch (error) {
        res.status(500).json({error: 'Token no valido'});
    }
}


export {
    createAccount,
    login,
    getUser
}