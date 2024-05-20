const express = require('express');
const router = express.Router();
const constituencyController = require('../controllers/constituencyController');

router.post('/constituencies', constituencyController.addConstituency);
router.get('/constituencies', constituencyController.getConstituencies);

module.exports = router;
