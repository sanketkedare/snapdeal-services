const mongoose = require('mongoose');

// Schema for Cart
const cartSchema = new mongoose.Schema({
  user: String,
  cart: Array,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
