const express = require("express");
const { removeFromshort, addToshort, getAllShortProducts } = require("../Controllers/shortController");

const shortRouter = express.Router();

shortRouter.get("/", getAllShortProducts);

shortRouter.post("/", addToshort);

shortRouter.delete("/", removeFromshort);

module.exports = shortRouter;
