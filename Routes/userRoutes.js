const express = require('express');
const {getAllUser, createUser,getUser, updateUser} = require('../Controllers/userController');

const userRoute = express.Router();

userRoute.get('/', getAllUser);
userRoute.post('/', createUser);
userRoute.get('/login', getUser);
userRoute.patch('/update', updateUser);

module.exports = userRoute;
