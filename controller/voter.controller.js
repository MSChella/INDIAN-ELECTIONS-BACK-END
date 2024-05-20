const Voter = require('../models/Voter');

const voterController = {
    addVoter: async (req, res) => {
        const newVoter = new Voter(req.body);
        try {
            await newVoter.save();
            res.status(201).json(newVoter);
        } catch (error) {
            res.status(500).json({ message: 'Error adding voter', error });
        }
    },
    getVoters: async (req, res) => {
        try {
            const voters = await Voter.find();
            res.status(200).json(voters);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving voters', error });
        }
    }
};

module.exports = voterController;
