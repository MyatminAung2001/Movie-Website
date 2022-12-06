import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

import User from "../models/user.js";

// Register User
export const postRegister = async (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = CryptoJS.AES.encrypt(req.body.password, process.env.PW_SECRET_KEY).toString();
    try {
        const newUser = new User({
            username: username,
            email: email,
            password: password,  
        });

        const user = await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);  
    }
};

// Login User
export const postLogin = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            const error = new Error('A user with this email could not be found!');
            error.statusCode = 401;
            throw error;
        };

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.PW_SECRET_KEY)
        const origianlPassword = bytes.toString(CryptoJS.enc.Utf8);
        if (origianlPassword !== req.body.password) {
            const error = new Error('Invalid Password!');
            error.statusCode = 401;
            throw error; 
        }; 

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin
            },
            process.env.PW_SECRET_KEY, 
            {
                expiresIn: '5d'
            }
        );

        const { password, ...info } = user._doc;

        return res.status(200).json({
            ...info,
            accessToken
        }); 
    } catch (error) {
        if (!error.statusCode) { 
            error.statusCode = 500; 
        }
        next(error);
    }
};