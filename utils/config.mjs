/**
 * Config file, contains app configurations and keys
 * 
 * @file config.mjs
 * @author SachchidanandY
*/

import dotenv from 'dotenv';

// To read keys or vaues from .env file
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI || '';
