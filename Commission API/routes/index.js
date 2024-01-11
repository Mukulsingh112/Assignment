const express = require('express');
const router = express.Router();
const merchantRoutes = require('./merchant'); // Importing modularized merchant routes

router.use('/merchants', merchantRoutes); // Using merchant routes under /merchants endpoint

module.exports = router;
