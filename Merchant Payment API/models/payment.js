const mongoose = require('mongoose');

// Define the Payment schema
// The Payment model is defined with fields such as merchantId, paymentDetails, and timestamp
const paymentSchema = new mongoose.Schema({
  merchantId: String,
  paymentDetails: String,
  timestamp: { type: Date, default: Date.now }, //The timestamp field is included to record the time when a payment is made.
});

// Create and export the Payment model
module.exports = mongoose.model('Payment', paymentSchema);
