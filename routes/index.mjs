/**
 * Include route handlers
 * 
 * @file index.mjs
 * @author SachchidanandY
*/

import Router from 'express';
import orgRoutes from './organization.mjs';
import userRouter from './user.mjs';
const router = Router();

router.use('/org', orgRoutes);
router.use('/user', userRouter);

export default router;
