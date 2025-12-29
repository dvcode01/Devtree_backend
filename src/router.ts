import { Router } from "express";
import { createAccount } from "./handlers";

const router = Router();

/* Autenticacion | Registro  */
router.post('/auth/register', createAccount);

export default router;