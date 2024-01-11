const express = require('express');
const router = express.Router();
const merchantRoutes = require('./merchant');
const paymentRoutes = require('./payment'); // Import the new payment routes

router.use('/merchants', merchantRoutes);
router.use('/merchants', paymentRoutes);

module.exports = router;
