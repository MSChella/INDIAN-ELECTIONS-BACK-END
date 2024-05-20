const Incident = require('../models/Incident');

const incidentController = {
    reportIncident: async (req, res) => {
        const newIncident = new Incident(req.body);
        try {
            await newIncident.save();
            res.status(201).json(newIncident);
        } catch (error) {
            res.status(500).json({ message: 'Error reporting incident', error });
        }
    },
    getIncidents: async (req, res) => {
        try {
            const incidents = await Incident.find();
            res.status(200).json(incidents);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving incidents', error });
        }
    }
};

module.exports = incidentController;
