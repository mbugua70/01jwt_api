const express = require('express');
const router = express.Router();

// controllers
const {Login, Dashboard} = require('../controllers/main');
const authorizationMiddleware = require("../middleware/auth");

router.route("/login").post(Login);

router.use(authorizationMiddleware);
router.route("/dashboard").get(Dashboard);

module.exports = router;