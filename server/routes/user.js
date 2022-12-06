import express from 'express';

import { verifyToken } from '../middleware/verifyToken.js';
import { updateUser, deleteUser, getUser, getAllUser, getStats } from '../controller/user.js';

const router = express.Router();

// Update User
router.put('/:id', verifyToken, updateUser);

// Delete User
router.delete('/:id', verifyToken, deleteUser);

// Get User
router.get('/find/:id', getUser);

// Get all Users
router.get('/', verifyToken, getAllUser);

// Get User Stats
router.get('/stats', getStats);
 
export default router; 