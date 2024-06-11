const express = require('express');
const { getAllCartProducts, addToCart, removeFromCart } = require('../Controllers/cartController');
const cartRoutes = express.Router();


cartRoutes.get('/getall',getAllCartProducts);
cartRoutes.post('/add',addToCart);
cartRoutes.delete('/delete',removeFromCart);


module.exports = cartRoutes;