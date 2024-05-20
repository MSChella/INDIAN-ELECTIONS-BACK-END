const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');

router.post('/register', authController.register);
router.post('/signin', authController.login);
// router.post('/forgot-password', authController.forgetPassword);
// router.post('/reset-password/:token', authController.resetPassword);
// router.get('/protected-route', authController.protectedRoute);

module.exports = router;