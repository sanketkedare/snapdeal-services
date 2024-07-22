const Product = require("../Model/productsSchema");

// Controller to get all products
const productController = async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json(data); // Respond with all products
  } catch (error) {
    res.status(400).json({ error: error.message }); // Handle errors
  }
};

// Controller to get a single product by ID
const productControllerSingle = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the product by ID
    const product = await Product.findOne({ id: parseInt(id) });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' }); // If product is not found, respond with an error
    }
    res.status(200).json(product); // Respond with the single product
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Server error' }); // Handle server errors
  }
};

module.exports = { productController, productControllerSingle };
