const express = require("express");
const cors = require("cors");

const { removeFromshort, addToshort, getAllShortProducts } = require("../Controllers/shortController");

const shortRouter = express.Router();

shortRouter.use(cors());

shortRouter.get("/", getAllShortProducts);

shortRouter.post("/", addToshort);

shortRouter.delete("/", removeFromshort);

module.exports = shortRouter;
