import {neon} from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import dotenv from 'dotenv';
import * as schema from '../db/schema.js';
dotenv.config();

const sql = neon(process.env.DATABASE_URL);
console.log("sql",sql);
export const db = drizzle(sql, { schema });