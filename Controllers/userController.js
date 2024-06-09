const User = require("../Model/userSchema");
const bcrypt = require("bcrypt");

const getAllUser = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const saltRounds = 10;
    user.password = await bcrypt.hash(user.password, saltRounds);

    await User.create(user);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const newUserData = req.body;
    const dbUserData = await User.findOne({ email: newUserData.email });
    dbUserData = {...newUserData};

    const data = await User.updateOne({ email: dbUserData.email, dbUserData});

    if (dbUserData) {
      res
        .status(200)
        .json({ message: "User updated successfully", user: dbUserData });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllUser, createUser, getUser, updateUser };
