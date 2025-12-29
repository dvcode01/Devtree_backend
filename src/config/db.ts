import mongoose from "mongoose";
import colors from 'colors';

 export const connectDB = async() => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI);
        console.log(colors.green(`MongoDB conectado en ${connection.host}: ${connection.port}`));
    } catch (error) {
        console.error(colors.bgRed.black.bold(error.message));
        process.exit(1);
    }
};