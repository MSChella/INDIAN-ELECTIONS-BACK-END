const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');

router.post('/candidates', candidateController.addCandidate);
router.get('/candidates', candidateController.getCandidates);

module.exports = router;
