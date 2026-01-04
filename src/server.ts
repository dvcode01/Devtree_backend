import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import router from './router';
import { connectDB } from './config/db';
import corsOptions from './config/cors';

const app = express();

config();
connectDB();

app.use(express.json());
app.use(cors(corsOptions));
app.use('/', router);

export default app;