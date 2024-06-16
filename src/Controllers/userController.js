const User = require("../Model/userSchema");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/jwt");

const getAllUser = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createUser = async (req, res) => {
  console.log("Method Called : ", req.body)
  try {
    const user = req.body;
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
    const token = createToken({id : user._id});
    res.cookie("authToken", token,{
      path:"/",
      expires: new Date(Date.now() + 3600000),
      secure: true,
      httpOnly: true,
      sameSite: "None"
    })
    res.status(200).json({ message: "Login successful" , token});
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const logOut = async (req,res) =>{
  res.clearCookie("authToken");
  return res.status(200).json({ message: "User logged out successfully" });
}

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

const deleteUser = async(req,res)=>
{
  const id = req.params.id;
  try{
    await User.findByIdAndDelete(id);
    res.status(200).json({message: 'User deleted successfully'});

  }
  catch(error)
  {
    res.status(404).json({message:"User not found"});

  }


}

module.exports = { getAllUser, createUser, getUser, updateUser, logOut, deleteUser };
