const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Add other customer details as needed
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
