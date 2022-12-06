import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.PW_SECRET_KEY, (error, user) => {
            if (error) {
                res
                    .status(403)
                    .json({
                        message: 'You are NOT authenticated!'
                    })
            }
            req.user = user;
            next();
        })
    } else {
        const error = new Error('You are NOT authenticated!');
        error.statusCode = 401;
        throw error;
    }

};