/**
 * Handles all organization routes
 * 
 * @file Organization.mjs
 * @author SachchidanandY
*/

import Router from 'express';
import expressValidation from 'express-validation';
import validateJWT from '../middleware/jwt_validator.mjs';
import { registerOrg } from '../controller/organization.mjs';
import { newOrgValidation } from '../middleware/request_validator.mjs';
import { VALIDATOR_OPTIONS } from '../utils/constants.mjs';

const { validate } = expressValidation;

const orgRouter = Router();

orgRouter.post('/new', validateJWT, validate(newOrgValidation, VALIDATOR_OPTIONS, {} ), registerOrg);

export default orgRouter;
