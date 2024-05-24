
require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/authMiddleware');

const User = require('../models/user.model');




const register = async (req, res) => {
    try {
        const { username, password,
            firstName,
            lastName,
            role,
            selectedConstituency,
            selectedDistrict,
            // talukId,
            sex,
            age,
            contactInfo,
            email,
            address,
            permanentAddress,
            temporaryAddress,
            state,
            aadharNo,
            fathersName,
            mothersName,
            spouseName,
            maritalStatus } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            password: hashedPassword,
            firstName,
            lastName,
            role,
            selectedConstituency,
            selectedDistrict,
            // talukId,
            sex,
            age,
            contactInfo,
            email,
            address,
            permanentAddress,
            temporaryAddress,
            state,
            aadharNo,
            fathersName,
            mothersName,
            spouseName,
            maritalStatus
        });

        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
router.get('/protected-route', verifyToken, (req, res) => {

    res.json({ message: 'You have access to this protected route.' });
});

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ username: user.username, userId: user._id }, 'mySecretKey123', { expiresIn: '1h' });


        res.status(200).json({ message: 'Signin successful', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {

    register,
    login,

};
