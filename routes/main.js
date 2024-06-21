const express = require('express');
const router = express.Router();

// controllers
const {Login, Dashboard} = require('../controllers/main');



router.route('/login').post(Login);
router.route('/dashboard').get(Dashboard);

module.exports = router;