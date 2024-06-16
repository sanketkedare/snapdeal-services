const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    title : String,
    price: String,
    category: String,
    description: String,
    image: String,
    rating:Object,
})

const Product = mongoose.model('products', productSchema);

module.exports = Product;