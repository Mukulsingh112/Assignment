
const express = require('express');
const router = express.Router();
const Merchant = require('../models/merchant');// Importing the Merchant model

// Retrieve commission for a specific merchant
router.get('/:merchantId/commission', async (req, res) => {
  try {
    const { merchantId } = req.params;
    const merchant = await Merchant.findOne({ merchantId });

    if (!merchant) {
      return res.status(404).json({ message: 'Merchant not found' });
    }

    res.status(200).json({ merchantId, commission: merchant.commission });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update commission for a specific merchant
router.put('/:merchantId/commission', async (req, res) => {
  try {
    const { merchantId } = req.params;
    const { commission } = req.body;

    const existingMerchant = await Merchant.findOne({ merchantId });

    if (!existingMerchant) {
      return res.status(404).json({ message: 'Merchant not found' });
    }

    existingMerchant.commission = commission;
    await existingMerchant.save();

    res.status(200).json({ message: 'Commission updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
