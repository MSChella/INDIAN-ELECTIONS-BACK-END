const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/voter-analytics', analyticsController.getVoterAnalytics);
router.get('/constituency-analytics', analyticsController.getConstituencyAnalytics);

module.exports = router;
