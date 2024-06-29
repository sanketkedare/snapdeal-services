const mongoose = require('mongoose');

const shortSchema = new mongoose.Schema({
    user : String,
    short: Array
})

const Short = mongoose.model('Short', shortSchema);

module.exports = Short;