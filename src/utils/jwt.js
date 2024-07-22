const jwt = require("jsonwebtoken");

// Function to create a JWT token
const createToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d", // Token expiration set to 1 day
  });
};

// Function to verify a JWT token
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

module.exports = { createToken, verifyToken };
