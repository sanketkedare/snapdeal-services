const mongoose = require('mongoose');

// Schema for Short (Assuming this is for short-term items or similar concept)
const shortSchema = new mongoose.Schema({
  user: String,
  short: Array,
});

const Short = mongoose.model('Short', shortSchema);

module.exports = Short;
