const mongoose = require('mongoose');

const constituencySchema = new mongoose.Schema({
    name: String,
    districtId: { type: mongoose.Schema.Types.ObjectId, ref: 'District' },
    votingPatterns: mongoose.Schema.Types.Mixed,
    strongParties: [String],
    genderData: mongoose.Schema.Types.Mixed,
    demographics: {
        ageGroups: Object,
        genderDistribution: Object,
    },
    politicalTrends: [String],
    keyIssues: [String]
});

module.exports = mongoose.model('Constituency', constituencySchema);
