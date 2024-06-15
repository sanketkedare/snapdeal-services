const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    title : String,
    price: String,
    category: String,
    description: String,
    image: String
})

const Product = mongoose.model('products', productSchema);

module.exports = Product;