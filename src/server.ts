import express from 'express';
import { config } from 'dotenv';
import router from './router';
import { connectDB } from './config/db';

const app = express();

config();
connectDB();

app.use(express.json());
app.use('/', router);

export default app;