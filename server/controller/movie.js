import CryptoJS from 'crypto-js';

import Movie from '../models/movie.js';

// Create Movie
export const postMovie = async (req, res, next) => {
    try {
        const admin = req.user.isAdmin;
        if (!admin) {
            const error = new Error('You are NOT authorized!');
            error.statusCode = 403;
            throw error;
        }
        if (admin) {
            const movie = new Movie(req.body);
            const saveMovie = await movie.save();
            return res.status(201).json(saveMovie);
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// Update Movie
export const putMovie = async (req, res, next) => {
    try {
        const admin = req.user.isAdmin;
        if (!admin) {
            const error = new Error('You are NOT authorized!');
            error.statusCode = 403;
            throw error;
        }
        if (admin) {
            const updatedMovie = await Movie.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            return res.status(200).json(updatedMovie);
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// Delete Movie
export const deleteMovie = async (req, res, next) => {
    try {
        const admin = req.user.isAdmin;
        if (!admin) {
            const error = new Error('You are NOT authorized!');
            error.statusCode = 403;
            throw error;
        }
        if (admin) {
            await Movie.findByIdAndDelete(req.params.id);
            return res.status(200).json({
                messaage: 'Deleted Successfully!'
            });
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// Get Movie
export const getMovie = async (req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.id);
        return res.status(200).json(movie);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// Get Random Movie
export const getRandomMovie = async (req, res, next) => {
    const type = req.query.type;
    let random;
    try {
        if (type === 'series') {
            random = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } }
            ]);
        } else {
            random = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } }
            ]);
        }
        
        return res.status(200).json(random);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// Get All
export const getAll = async (req, res, next) => {
    const admin = req.user.isAdmin;
    try {
        if (!admin) {
            const error = new Error('You are NOT authorized!');
            error.statusCode = 403;
            throw error;
        }
        if (admin) {
            const movies = await Movie.find();
            return res.status(200).json(movies.reverse());
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};