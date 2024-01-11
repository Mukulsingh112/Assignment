const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
  merchantId: String,
  commission: Number,
});

module.exports = mongoose.model('Merchant', merchantSchema);
