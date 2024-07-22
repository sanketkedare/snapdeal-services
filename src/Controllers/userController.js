const User = require("../Model/userSchema");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/jwt");

// Controller to get all users
const getAllUser = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data); // Respond with all users
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); // Handle errors
  }
};

// Controller to create a new user
const createUser = async (req, res) => {
  console.log("Method Called : ", req.body);
  try {
    const user = req.body;
    await User.create(user); // Create a new user
    res.status(201).json({ message: "User created successfully" }); // Success response
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422).json({ error: error.message }); // Validation errors
    } else {
      res.status(500).json({ error: error.message }); // Other errors
    }
  }
};

// Controller to log in a user
const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "User not found" }); // If user not found
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" }); // Invalid password
    }

    const token = createToken({ id: user._id }); // Create a token
    res.cookie("authToken", token, {
      path: "/",
      expires: new Date(Date.now() + 3600000), // 1 hour expiry
      secure: true,
      httpOnly: true,
      sameSite: "None"
    });
    res.status(200).json({ message: "Login successful", token }); // Success response
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); // Handle errors
  }
};

// Controller to log out a user
const logOut = async (req, res) => {
  res.clearCookie("authToken"); // Clear the authentication cookie
  return res.status(200).json({ message: "User logged out successfully" }); // Success response
};

// Controller to update user details
const updateUser = async (req, res) => {
  try {
    const newUserData = req.body;
    let dbUserData = await User.findOne({ email: newUserData.email });

    if (!dbUserData) {
      return res.status(404).json({ message: "User not found" }); // If user not found
    }

    // Update user data
    dbUserData = { ...dbUserData._doc, ...newUserData };
    await User.updateOne({ email: newUserData.email }, dbUserData);

    res.status(200).json({ message: "User updated successfully", user: dbUserData }); // Success response
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" }); // Handle errors
  }
};

// Controller to delete a user by ID
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id); // Delete the user
    res.status(200).json({ message: 'User deleted successfully' }); // Success response
  } catch (error) {
    res.status(404).json({ message: "User not found" }); // If user not found
  }
};

module.exports = { getAllUser, createUser, getUser, updateUser, logOut, deleteUser };
