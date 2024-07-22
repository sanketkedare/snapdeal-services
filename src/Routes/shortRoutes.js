const express = require("express");
const cors = require("cors");
const { removeFromshort, addToshort, getAllShortProducts } = require("../Controllers/shortController");

const shortRouter = express.Router();

shortRouter.use(cors());

// Route to get all short products
shortRouter.get("/", getAllShortProducts);

// Route to add a product to short
shortRouter.post("/", addToshort);

// Route to remove a product from short
shortRouter.delete("/", removeFromshort);

module.exports = shortRouter;
