const express = require("express");
const {
  productController,
  productControllerSingle,
} = require("../Controllers/productController");

const productRouter = express.Router();

// Route to get all products
productRouter.get("/", productController);

// Route to get a product by ID
productRouter.get("/:id", productControllerSingle);

module.exports = productRouter;
