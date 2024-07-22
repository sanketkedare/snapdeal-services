const express = require('express');
const { getAllUser, createUser, getUser, updateUser, logOut, deleteUser } = require('../Controllers/userController');
const authentication = require('../middlewares/userMiddleware');

const userRoute = express.Router();

// Retrieve all users
userRoute.get('/getall', getAllUser);

// Sign up a new user
userRoute.post('/signup', createUser);

// Log in a user
userRoute.post('/login', getUser);

// Log out a user
userRoute.post('/logout', logOut);

// Update a user
userRoute.patch('/update', updateUser);

// Delete a user by ID (with authentication middleware)
userRoute.delete('/:id', authentication, deleteUser);

module.exports = userRoute;
