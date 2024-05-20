const District = require('../models/district.model');

const addDistrict = async (req, res) => {
    const newDistrict = new District(req.body);
    try {
        await newDistrict.save();
        res.status(201).json(newDistrict);
    } catch (error) {
        res.status(500).json({ message: 'Error adding district', error });
    }
};
const getDistrict = async (req, res) => {
    try {
        const district = await District.find();
        res.status(200).json(district);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving district', error });
    }
}


module.exports = { addDistrict, getDistrict }
