
require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers('Authorization');
    ;
    console.log('Auth Header:', authHeader);
    console.log('Token:', token);
    // if (!token) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, 'mySecretKey123');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token.' });
    }
};

module.exports = verifyToken;
