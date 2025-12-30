import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const handleInputErrors = (req: Request, res: Response, next: NextFunction) => {
    let result = validationResult(req);
    
    if(!result.isEmpty()){
        return res.status(400).json({errors: result.array()});
    }

    next();
}

export default handleInputErrors;