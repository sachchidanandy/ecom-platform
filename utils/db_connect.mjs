/**
 * Module to hanble connection with DB
 * 
 * @file db_connect.mjs
 * @author SachchidanandY
*/

import mongoose from 'mongoose';
import { MONGODB_URI } from './config';

// Connection config
const dbConfig = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
};

export default () => {
    // Connect to db
    mongoose.connect(MONGODB_URI, dbConfig).then(() => {
        console.log('Connected to db successfully...');
    }).catch( err => {
        console.error(err.message);
    });

    // Listen to any error after connection
    mongoose.connection.on('error', err => {
        console.error(err.message);
    });
};
