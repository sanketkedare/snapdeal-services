const express = require("express");
const cors = require("cors");
const userRoute = require("./Routes/userRoutes");
const locationRouter = require("./Routes/locationRoutes");
const productRouter = require("./Routes/productRoutes");
const cartRouter = require("./Routes/cartRoutes");
const shortRouter = require("./Routes/shortRoutes");
const cookieParser = require("cookie-parser");

const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// Base route to check if the app is working
app.get("/", async (req, res) => {
  const MESSAGE = "App Working fine please go by `/api/...`";
  res.status(200).json({ message: MESSAGE });
});

// User routes
app.use("/api/user", userRoute);

// Location routes
app.use("/api/location", locationRouter);

// Product routes
app.use("/api/products", productRouter);

// Cart routes
app.use('/api/cart', cartRouter);

// Short routes
app.use('/api/short', shortRouter);

module.exports = app;
