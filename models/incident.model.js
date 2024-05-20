const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
    description: String,
    location: String,
    reportedBy: String,
    status: { type: String, default: 'pending' },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Incident', incidentSchema);
