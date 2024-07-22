const mongoose = require("mongoose");

// Schema for Product
const productSchema = new mongoose.Schema({
  title: String,
  price: String,
  category: String,
  description: String,
  image: String,
  rating: Object,
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;
