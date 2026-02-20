import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log('Connected to DataBase');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const app = express(); 
app.use(express.json());
app.use(cors());

app.get('/test', async (req: Request, res: Response) => {
    res.json({ message: 'Hello Test!' });
});

app.listen(7000, () => {
    console.log('Server is running on localhost:7000');
});