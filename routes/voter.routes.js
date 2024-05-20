const express = require('express');
const router = express.Router();
const voterController = require('../controllers/voterController');

router.post('/voters', voterController.addVoter);
router.get('/voters', voterController.getVoters);

module.exports = router;
