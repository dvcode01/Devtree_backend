import bcrypt from 'bcrypt';

const hashPassword = async (password: string) => {
    const saltPass = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, saltPass);

    return hash;
}

const checkPassword = async (password: string, passUser: string) => {
    return await bcrypt.compare(password, passUser);
}

export {
    checkPassword
}

export default hashPassword;