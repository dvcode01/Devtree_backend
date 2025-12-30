import { Router } from "express";
import { body } from "express-validator";
import { createAccount } from "./handlers";

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
    , createAccount);

export default router;