const State = require('../models/state.model');

const
    addState = async (req, res) => {
        const newState = new State(req.body);
        try {
            await newState.save();
            res.status(201).json(newState);
        } catch (error) {
            res.status(500).json({ message: 'Error adding state', error });
        }
    };
const getStates = async (req, res) => {
    try {
        const state = await State.find();
        res.status(200).json(state);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving States', error });
    }
}


module.exports = { getStates, addState }
