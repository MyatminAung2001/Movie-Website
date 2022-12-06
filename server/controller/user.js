import CryptoJS from 'crypto-js';

import User from "../models/user.js";

// Update User
export const updateUser = async (req, res, next) => {
    try {
        const updatingUser = req.user.id === req.params.id || req.user.isAdmin;
        if (!updatingUser) {
            const error = new Error('You are authorized to update your own account!');
            error.statusCode = 403;
            throw error;
        }
        if (updatingUser) {
            const hashedPassword = req.body.password;
            if (hashedPassword) {
                hashedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.PW_SECRET_KEY).toString();
            }

            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                { $set: req.body }, 
                { new: true } 
            )

            return res.status(200).json(updatedUser);
        } 
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// Delete User
export const deleteUser = async (req, res, next) => {
    try {
        const deletingUser = req.user.id === req.params.id || req.user.isAdmin;
        if (!deletingUser) {
            const error = new Error('You are authorized to delete your own account!');
            error.statusCode = 403;
            throw error;
        }
        if (deletingUser) {
            await User.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                messaage: 'Deleted Successfully!'
            })
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// Get User
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        return res.status(200).json(info);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// Get all Users
export const getAllUser = async (req, res, next) => {
    const query = req.query.new;
    try {
        const admin = req.user.isAdmin;
        if (!admin) {
            const error = new Error('You are NOT authorized!');
            error.statusCode = 403;
            throw error;
        }
        if (admin) {
            const users = query 
            ? await User.find().sort({ _id: -1 }).limit(10)
            : await User.find();
            return res.status(200).json(users);
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error); 
    }
};

// Get User Stats
export const getStats = async (req, res, next) => {
    const todayDate = new Date();
    const lastYear = todayDate.setFullYear(todayDate.setFullYear() - 1);

    const monthsArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" }
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ])
        return res.status(200).json(data);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }  
        next(error);
    } 
};