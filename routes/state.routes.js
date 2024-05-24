const express = require('express');
const router = express.Router();
const stateController = require('../controller/state.controller');

router.post('/create', stateController.addState);
router.get('/', stateController.getStates);

module.exports = router;