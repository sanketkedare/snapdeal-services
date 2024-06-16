const express = require("express");
const Product = require("../Model/productsSchema");

const productRouter = express.Router();



productRouter.get("/", async (req, res) => 
{

  try {
    const data =  await Product.find();
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({error: error.message})
    
  }


});

module.exports = productRouter;
