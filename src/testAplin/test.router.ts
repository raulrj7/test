import * as express from 'express';
import  authRouterCtrl  from './test.ctrl';

export const testRouter = express.Router()

testRouter
.post('/', authRouterCtrl.dataFilteringCtrl)
.get('/', authRouterCtrl.getStringCtrl)