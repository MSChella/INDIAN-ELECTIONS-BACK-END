const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    constituency: String,
    votingHistory: [String],
    preferences: [String],
    contactInfo: {
        email: String,
        phone: String,
    }
});

module.exports = mongoose.model('Voter', voterSchema);
