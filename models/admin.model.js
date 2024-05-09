const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    // Add more fields as needed
});

const Admin = mongoose.model('Admin', adminSchema, 'admin');

module.exports = Admin;
