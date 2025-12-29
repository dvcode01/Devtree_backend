import User from "../models/User";

const createAccount = async(req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.json({msg: 'Usuario registrado correctamente'});
    } catch (error) {
        console.error(error);
    }
};


export {
    createAccount
}