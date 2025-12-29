import { Router } from "express";
import User from "./models/User";

const router = Router();

/* Autenticacion | Registro  */
router.post('/auth/register', async(req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.json({msg: 'Usuario registrado correctamente'});
    } catch (error) {
        console.error(error);
    }
});

export default router;