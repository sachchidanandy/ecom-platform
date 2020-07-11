/** 
 * Main page of App, user to start server and config necessary middlewares
 * 
 * @file index.js
 * @author SachchidanandY 
*/

import express from 'express';
import cors  from 'cors';
import db_connect from './utils/db_connect.mjs';
import routes from './routes/index.mjs';
import expressValidation from 'express-validation';
import { INTERNAL_SERVER_ERROR } from './utils/constants.mjs'

// Initialize app
const app = express();
const port = process.env.PORT || 5000;
const { ValidationError } = expressValidation;

// Add cors middleware
app.use(cors());

// Parse data into JSON
app.use(express.json());

// Add routes
app.use(routes);

// Add global error handler
app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }

    return res.status(INTERNAL_SERVER_ERROR).json(err)
});

// Create connection to db
db_connect();

app.listen(port, () => {
    console.log(`Server is runnint at port: ${port}`);
});
