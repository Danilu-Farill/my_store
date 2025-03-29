import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { router } from './router/index.router';

dotenv.config();
const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '2001');

router(app);
app.use('/', (req: Request, res: Response): void => {
    res.send('Hello world postman!');
});

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});