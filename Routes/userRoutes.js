const express = require('express');
const {getAllUser, createUser,getUser} = require('../Controllers/userController');

const userRoute = express.Router();

userRoute.get('/', getAllUser);
userRoute.post('/', createUser);
userRoute.get('/login', getUser)

module.exports = userRoute;
