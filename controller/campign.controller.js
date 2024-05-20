const Campaign = require('../models/Campaign');

const campaignController = {
    addCampaign: async (req, res) => {
        const newCampaign = new Campaign(req.body);
        try {
            await newCampaign.save();
            res.status(201).json(newCampaign);
        } catch (error) {
            res.status(500).json({ message: 'Error adding campaign', error });
        }
    },
    getCampaigns: async (req, res) => {
        try {
            const campaigns = await Campaign.find();
            res.status(200).json(campaigns);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving campaigns', error });
        }
    }
};

module.exports = campaignController;
