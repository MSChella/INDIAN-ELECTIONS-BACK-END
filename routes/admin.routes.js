const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin.controller');

// POST request to create a new admin
router.post('/register', adminController.createAdmin);

module.exports = router;
