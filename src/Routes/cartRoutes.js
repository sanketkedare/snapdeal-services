const express = require('express');
const { getAllCartProducts, addToCart, removeFromCart } = require('../Controllers/cartController');
const cartRouter = express.Router();


cartRouter.get('/getall',getAllCartProducts);
cartRouter.post('/add',addToCart);
cartRouter.delete('/delete',removeFromCart);


module.exports = cartRouter;