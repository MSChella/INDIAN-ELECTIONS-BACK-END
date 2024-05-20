const Voter = require('../models/Voter');
const Constituency = require('../models/Constituency');

const analyticsController = {
    getVoterAnalytics: async (req, res) => {
        try {
            const totalVoters = await Voter.countDocuments();
            const ageDistribution = await Voter.aggregate([
                { $group: { _id: "$age", count: { $sum: 1 } } }
            ]);
            res.status(200).json({ totalVoters, ageDistribution });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving analytics', error });
        }
    },
    getConstituencyAnalytics: async (req, res) => {
        try {
            const constituencies = await Constituency.find();
            res.status(200).json(constituencies);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving analytics', error });
        }
    }
};

module.exports = analyticsController;
