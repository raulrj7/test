import { Router } from 'express';
import { testRouter } from '../testAplin/test.router';

export const mainRouter: Router = Router();

mainRouter
.use('/test', testRouter)
