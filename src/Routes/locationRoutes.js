const express = require("express");
const { locationController } = require("../Controllers/locationController");
const cors = require("cors");

const locationRouter = express.Router();

locationRouter.use(cors());

locationRouter.post("/", locationController);

module.exports = locationRouter;
