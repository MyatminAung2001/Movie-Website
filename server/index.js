import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cros from 'cors';

import authRoutes from './routes/auth.js';
import updateUserRoutes from './routes/user.js';
import movieRoutes from './routes/movie.js';
import listRoutes from './routes/list.js';

const app = express();

app.use(cros());

dotenv.config({ path: './config.env'});

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res, next) => {
    res.send('APP IS RUNNING')
});

app.use('/auth', authRoutes);

app.use('/users', updateUserRoutes);

app.use('/movies', movieRoutes);

app.use('/lists', listRoutes);

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('DB connected successfully.');
    })
    .catch((error) => {
        console.log(error);
    });   

app.listen(process.env.PORT || 4000, () => {
    console.log('Server running on port 4000')
});