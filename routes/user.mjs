/**
 * Handle all user related routes
 *
 * @file user.mjs
 * @author SachchidanandY
*/

import Router from 'express';
import expressValidation from 'express-validation';
import validateJWT from '../middleware/jwt_validator.mjs';
import { createUser, updateUser, deleteUser } from '../controller/user.mjs';
import { newUserValidation } from '../middleware/request_validator.mjs';
import { VALIDATOR_OPTIONS } from '../utils/constants.mjs';

const { validate } = expressValidation;

const userRouter = Router();

userRouter.post('/new', validate(newUserValidation, VALIDATOR_OPTIONS, {} ), createUser);
userRouter.put('/update', validateJWT, validate(newUserValidation, VALIDATOR_OPTIONS, {} ), updateUser);
userRouter.delete('/delete', validateJWT, validate(newUserValidation, VALIDATOR_OPTIONS, {} ), deleteUser);

export default userRouter;
