const express = require('express');
const { getAllCartProducts, addToCart, removeFromCart } = require('../Controllers/cartController');
const cartRouter = express.Router();
const cors = require('cors');

cartRouter.use(cors())


cartRouter.get('/',getAllCartProducts);
cartRouter.post('/',addToCart);
cartRouter.delete('/',removeFromCart);


module.exports = cartRouter;