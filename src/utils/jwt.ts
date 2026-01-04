import { JwtPayload, sign} from 'jsonwebtoken';

const generateJWT = (payload: JwtPayload) => {
    const token = sign(payload, process.env.SECRET_JWT, {
        expiresIn: '3 days'
    });
    
    return token;
}

export default generateJWT;