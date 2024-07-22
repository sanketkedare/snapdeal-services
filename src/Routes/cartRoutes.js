const express = require('express');
const { getAllCartProducts, addToCart, removeFromCart } = require('../Controllers/cartController');
const cartRouter = express.Router();
const cors = require('cors');

cartRouter.use(cors());

// Route to get all products in the cart
cartRouter.get('/', getAllCartProducts);

// Route to add a product to the cart
cartRouter.post('/', addToCart);

// Route to remove a product from the cart
cartRouter.delete('/', removeFromCart);

module.exports = cartRouter;
