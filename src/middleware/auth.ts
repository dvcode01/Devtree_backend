import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import User, { IUser } from "../models/User";

declare global {
    namespace Express {
        interface Request {
            user: IUser
        }
    }
}

const authenticate = async(req: Request, res: Response, next: NextFunction) => {
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

            req.user = user;
            next();
        }
        
    } catch (error) {
        res.status(500).json({error: 'Token no valido'});
    }
}

export default authenticate;