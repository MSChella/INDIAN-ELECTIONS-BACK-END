const Admin = require('../models/admin.model');

exports.createAdmin = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        const admin = new Admin({
            username,
            password,
            email,
            // Add more fields as needed
        });

        const savedAdmin = await admin.save();
        res.status(201).json(savedAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// };
// const express = require('express');
// const router = express.Router();
// const adminController = require('../controllers/admin.controller');

// // POST request to create a new admin
// router.post('/', adminController.createAdmin);

// module.exports = router;
