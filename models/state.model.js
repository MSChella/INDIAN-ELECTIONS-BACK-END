const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    name: String,
    constituency: { type: mongoose.Schema.Types.ObjectId, ref: 'ConstituencyLegislativeAssemblyConstituency' },
    // votingPatterns: mongoose.Schema.Types.Mixed,
    // strongParties: [String],
    // genderData: mongoose.Schema.Types.Mixed,
    // demographics: {
    //     ageGroups: Object,
    //     genderDistribution: Object,
    // },
    // politicalTrends: [String],
    // keyIssues: [String]
});

module.exports = mongoose.model('State', stateSchema);
