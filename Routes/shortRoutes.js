const express = require("express");
const { removeFromshort, addToshort, getAllShortProducts } = require("../Controllers/shortController");

const shortRouter = express.Router();

shortRouter.get("/getall", getAllShortProducts);

shortRouter.post("/add", addToshort);

shortRouter.delete("/delete", removeFromshort);

module.exports = shortRouter;
