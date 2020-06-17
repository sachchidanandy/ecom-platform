/** 
 * Main page of App, user to start server and config necessary middlewares
 * 
 * @file index.js
 * @author SachchidanandY 
*/

import express from 'express';
import cors  from 'cors';
import db_connect from './utils/db_connect.mjs';

// Initialize app
const app = express();
const port = process.env.PORT || 5000;

// Add cors middleware
app.use(cors());
// Parse data into JSON
app.use(express.json());

// Create connection to db
db_connect();

app.listen(port, () => {
    console.log(`Server is runnint at port: ${port}`);
});
