const User = require("../Model/userSchema");
const { verifyToken } = require("../utils/jwt");

// Middleware to authenticate the user
const authentication = async (req, res, next) => {
  try {
    const { cookies } = req;
    console.log(cookies); // Log cookies for debugging purposes

    // Retrieve the auth token from cookies
    const token = req.cookies.authToken;
    if (!token) {
      return res.status(401).send({ message: "Unauthorized" }); // If no token, respond with unauthorized status
    }

    // Verify the token
    const decoded = verifyToken(token);
    
    // Find the user by ID from the decoded token
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).send({ message: "Unauthorized" }); // If no user found, respond with unauthorized status
    }

    // Attach the user to the request object
    req.user = user;
    
    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in authorizing the user", error: error.message }); // Handle errors
  }
};

module.exports = authentication;
