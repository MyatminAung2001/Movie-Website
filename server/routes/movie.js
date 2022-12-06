import express from 'express';

import { verifyToken } from '../middleware/verifyToken.js';
import { deleteMovie, getAll, getMovie, getRandomMovie, postMovie, putMovie } from '../controller/movie.js';

const router = express.Router();

// Create Movie
router.post('/', verifyToken, postMovie);

// Update Movie
router.put('/:id', verifyToken, putMovie);

// Delete Movie
router.delete('/:id', verifyToken, deleteMovie);

// Get Movie
router.get('/find/:id', verifyToken, getMovie);

// Get Random Movie
router.get('/random', verifyToken, getRandomMovie);

// Get All
router.get('/', verifyToken, getAll);
 
export default router; 