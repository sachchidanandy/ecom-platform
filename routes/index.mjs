/**
 * Include route handlers
 * 
 * @file index.mjs
 * @author SachchidanandY
*/

import Router from 'express';
import orgRoutes from './Organization.mjs'
const router = Router();

router.use('/org', orgRoutes);

export default router;
