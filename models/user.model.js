const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true, unique: true },
    sex: { type: String, required: true, unique: true },
    age: { type: String, required: true, unique: true },
    contactInfo: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true, unique: true },
    permanentAddress: { type: String, required: true, unique: true },
    temporaryAddress: { type: String, required: true, unique: true },
    state: { type: String, required: true, unique: true },
    fathersName: { type: String, required: true, unique: true },
    mothersName: { type: String, required: true, unique: true },
    spouseName: { type: String, required: true, unique: true },
    maritalStatus: { type: String, required: true, unique: true }
    // Add other customer details as needed
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
