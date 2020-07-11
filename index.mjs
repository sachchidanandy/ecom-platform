/** 
 * Main page of App, user to start server and config necessary middlewares
 * 
 * @file index.js
 * @author SachchidanandY 
*/

import express from 'express';
import cors  from 'cors';
import expressValidation from 'express-validation';
import fileUpload from 'express-fileupload';
import path from 'path';
import db_connect from './utils/db_connect.mjs';
import routes from './routes/index.mjs';
import { INTERNAL_SERVER_ERROR } from './utils/constants.mjs'

// Initialize app
const app = express();
const port = process.env.PORT || 5000;
const { ValidationError } = expressValidation;

app.use(cors()); // Add cors middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } })); // For file upload
app.use(express.static(path.join(path.resolve(), 'public'))); // Requests for static files
app.use(routes); // Add routes

// Add global error handler
app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }
    console.error(err);
    return res.status(INTERNAL_SERVER_ERROR).json(err)
});

db_connect(); // Create connection to db

app.listen(port, () => {
    console.log(`Server is runnint at port: ${port}`);
});
