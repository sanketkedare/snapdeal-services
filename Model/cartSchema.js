const mongoose = require('mongoose');

const cartScheama = new mongoose.Schema({
    email:String,
    cart:Array
})


const Cart = mongoose.model('Cart', cartScheama);

module.exports = Cart;