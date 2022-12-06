import express from 'express';

import { verifyToken } from '../middleware/verifyToken.js';
import { deleteList, getList, postList } from '../controller/list.js';

const router = express.Router();

// Create List
router.post('/', verifyToken, postList);

// Delete List
router.post('/:id', verifyToken, deleteList);

// Get List
router.get('/', verifyToken, getList);
   
export default router; 