import { Router } from "express";

const router = Router();

router.get('/', (req, res) => res.send('Hola mundo desde inicio'));

/* Autenticacion | Registro  */
router.post('/auth/register', (req, res) => {
    console.log(req.body);
});

export default router;