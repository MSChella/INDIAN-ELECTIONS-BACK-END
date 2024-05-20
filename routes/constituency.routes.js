const express = require('express');
const router = express.Router();
const constituencyController = require('../controller/constituency.controller');

router.post('/create', constituencyController.addConstituency);
router.get('/', constituencyController.getConstituencies);

module.exports = router;
