const express = require('express');
const router = express.Router();
const Payment = require('./models/payment'); // Import the Payment model

// Retrieve payment history for a specific merchant
//The GET route fetches payment history for a specific merchant from the database.
router.get('/:merchantId/payments', async (req, res) => {
  try {
    const { merchantId } = req.params;

    // Fetch payments from the database for the given merchantId
    const payments = await Payment.find({ merchantId });

    // Respond with the payment history
    res.status(200).json({ merchantId, payments });
  } catch (error) {
    // Handle any errors that may occur during the operation
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Record a new payment for a specific merchant
//The POST route records a new payment for a specific merchant by creating a new instance of the Payment model and saving it to the database.
router.post('/:merchantId/payments', async (req, res) => {
  try {
    const { merchantId } = req.params;
    const { paymentDetails } = req.body;

    // Create a new Payment instance
    const newPayment = new Payment({ merchantId, paymentDetails });

    // Save the new payment to the database
    await newPayment.save();

    // Respond with a success message
    res.status(201).json({ message: 'Payment recorded successfully' });
  } catch (error) {
    // Handle any errors that may occur during the operation
    //Appropriate error handling is implemented to handle potential issues during database operations.
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Export the router
module.exports = router;
