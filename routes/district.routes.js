const express = require('express');
const router = express.Router();
const districtController = require('../controller/district.controller');

router.post('/create', districtController.addDistrict);
router.get('/', districtController.getDistrict);

module.exports = router;
