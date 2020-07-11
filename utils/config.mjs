/**
 * Config file, contains app configurations and keys
 * 
 * @file config.mjs
 * @author SachchidanandY
*/

import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// To read keys or vaues from .env file
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI || '';
export const PRIVATE_KEY = process.env.PRIVATE_KEY || fs.readFileSync(path.resolve(path.dirname(''), './keys/private.key'));
export const PUBLIC_KEY = process.env.PUBLIC_KEY || fs.readFileSync(path.resolve(path.dirname(''), './keys/public.key'));
