const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: String,
    party: String,
    profile: String,
    campaignStrategies: [String],
    performanceMetrics: Object
});

module.exports = mongoose.model('Candidate', candidateSchema);
