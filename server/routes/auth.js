import express from 'express';

import { postRegister, postLogin } from '../controller/auth.js';

const router = express.Router();

// Register User
router.post('/register', postRegister);

// Login User
router.post('/login', postLogin);

export default router;