const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');

router.post('/campaigns', campaignController.addCampaign);
router.get('/campaigns', campaignController.getCampaigns);

module.exports = router;
