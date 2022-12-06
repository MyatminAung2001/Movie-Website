import CryptoJS from 'crypto-js';

import List from '../models/list.js';

// Create List
export const postList = async (req, res, next) => {
    try {
        const admin = req.user.isAdmin;
        if (!admin) {
            const error = new Error('You are NOT authorized!');
            error.statusCode = 403;
            throw error;
        }
        if (admin) {
            const list = new List(req.body);
            const saveList = await list.save();
            return res.status(201).json(saveList);
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// Delete List 
export const deleteList = async (req, res, next) => {
    try {
        const admin = req.user.isAdmin;
        if (!admin) {
            const error = new Error('You are NOT authorized!');
            error.statusCode = 403;
            throw error;
        }
        if (admin) {
            await List.findByIdAndDelete(req.params.id);
            return res.status(201).json({
                message: 'Deleted Succesfully!'
            });
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// Get List
export const getList = async (req, res, next) => {
    const type = req.query.type;
    const genre = req.query.genre;
    let list = [];
    try {
        if (type) {
            if (genre) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: type, genre: genre } }
                ])
            }
            if (!genre) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: type } }
                ])
            }
        }
        if (!type) {
            list = await List.aggregate([
                { $sample: { size: 10 } }
            ])
        }
        return res.status(200).json(list);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};