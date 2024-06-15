const express = require("express");
const { locationController } = require("../Controllers/locationController");

const locationRouter = express.Router();

locationRouter.get("/", locationController);

module.exports = locationRouter;
