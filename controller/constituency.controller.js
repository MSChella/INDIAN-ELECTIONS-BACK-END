const Constituency = require('../models/Constituency');

const constituencyController = {
    addConstituency: async (req, res) => {
        const newConstituency = new Constituency(req.body);
        try {
            await newConstituency.save();
            res.status(201).json(newConstituency);
        } catch (error) {
            res.status(500).json({ message: 'Error adding constituency', error });
        }
    },
    getConstituencies: async (req, res) => {
        try {
            const constituencies = await Constituency.find();
            res.status(200).json(constituencies);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving constituencies', error });
        }
    }
};

module.exports = constituencyController;
