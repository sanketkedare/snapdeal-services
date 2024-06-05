const express = require('express');
const connectToDB = require('./Config/connectToDB');
const User = require('./Model/userSchema');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());

connectToDB()

app.get("/", async(req,res)=>{
    const data = await User.find();

    res.status(200).json(data);
})

app.listen(PORT, ()=>{
    
  console.log(`app listening on port ${PORT}`)
})