const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    name: String,
    events: [{
        title: String,
        date: Date,
        location: String,
        description: String
    }],
    volunteers: [String],
    socialMedia: {
        facebook: String,
        twitter: String,
        instagram: String
    }
});

module.exports = mongoose.model('Campaign', campaignSchema);
