const express = require("express");
const { locationController } = require("../Controllers/locationController");
const cors = require("cors");

const locationRouter = express.Router();

locationRouter.use(cors());

// Route to get location details by pin code
locationRouter.get("/:pin", locationController);

module.exports = locationRouter;
