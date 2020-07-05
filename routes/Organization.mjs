/**
 * Handles all organization routes
 * 
 * @file Organization.mjs
 * @author SachchidanandY
*/

import Router from 'express';
import { registerOrg } from '../controller/Organization.mjs';

const orgRouter = Router();

orgRouter.post('/new', registerOrg);

export default orgRouter;
