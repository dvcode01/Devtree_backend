import { Router } from "express";
import { body } from "express-validator";
import { createAccount, login, getUser } from "./handlers";
import handleInputErrors from "./middleware/validation";
import authenticate from "./middleware/auth";

const router = Router();

/* Autenticacion | Registro  */
router.post('/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacío'),
    body('email')
        .isEmail()
        .withMessage('Email no válido'),
    body('nombre')
        .notEmpty()
        .withMessage('El nombre no puede ir vacío'),
    body('password')
        .isLength({min: 8})
        .withMessage('El Password es muy corto, mínimo 8 caracteres')
    , handleInputErrors, createAccount);

router.post('/auth/login', 
    body('email')
        .isEmail()
        .withMessage('Email no válido'),
    body('password')
        .notEmpty()
        .withMessage('El Password es obligatorio')
    , handleInputErrors, login);

router.get('/user', authenticate, getUser);

export default router;