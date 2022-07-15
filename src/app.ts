import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';
import { mainRouter } from './main/main.router';

export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('short'));
app.use(cors());

app.use('/api-v1', mainRouter);
