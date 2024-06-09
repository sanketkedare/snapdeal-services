const express = require("express");
const Product = require("../Model/productsSchema");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => 
{
  const data = await Product.find();
  res.status(200).json(data);
});

module.exports = productRouter;
