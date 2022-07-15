import dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({ path: join(__dirname, '../../', `.env.${process.env.NODE_ENV || 'dev'}`)  });

export const PORT = Number(process.env.PORT);