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


productRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({id: parseInt(id)});
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = productRouter;
