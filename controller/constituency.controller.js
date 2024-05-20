const Constituency = require('../models/LegislativeAssemblyConstituency.model');

const
    addConstituency = async (req, res) => {
        const newConstituency = new Constituency(req.body);
        try {
            await newConstituency.save();
            res.status(201).json(newConstituency);
        } catch (error) {
            res.status(500).json({ message: 'Error adding constituency', error });
        }
    };
const getConstituencies = async (req, res) => {
    try {
        const constituency = await Constituency.find();
        res.status(200).json(constituency);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving constituencies', error });
    }
}


module.exports = { getConstituencies, addConstituency }
