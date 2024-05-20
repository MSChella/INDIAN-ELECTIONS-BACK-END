const Candidate = require('../models/Candidate');

const candidateController = {
    addCandidate: async (req, res) => {
        const newCandidate = new Candidate(req.body);
        try {
            await newCandidate.save();
            res.status(201).json(newCandidate);
        } catch (error) {
            res.status(500).json({ message: 'Error adding candidate', error });
        }
    },
    getCandidates: async (req, res) => {
        try {
            const candidates = await Candidate.find();
            res.status(200).json(candidates);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving candidates', error });
        }
    }
};

module.exports = candidateController;
