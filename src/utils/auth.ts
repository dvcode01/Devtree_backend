import bcrypt from 'bcrypt';

const hashPassword = async (password: string) => {
    const saltPass = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, saltPass);

    return hash;
}

export default hashPassword;