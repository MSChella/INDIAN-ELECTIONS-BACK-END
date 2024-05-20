const express = require('express');
const router = express.Router();
const incidentController = require('../controllers/incidentController');

router.post('/incidents', incidentController.reportIncident);
router.get('/incidents', incidentController.getIncidents);

module.exports = router;
