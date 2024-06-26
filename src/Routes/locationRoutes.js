const express = require("express");
const { locationController, setPincodeData } = require("../Controllers/locationController");
const cors = require("cors");

const locationRouter = express.Router();

locationRouter.use(cors());

// locationRouter.get('/', setPincodeData)

locationRouter.post("/:pin", locationController);

module.exports = locationRouter;
