const express = require("express");
const cors = require("cors");
const userRoute = require("./Routes/userRoutes");
const locationRouter = require("./Routes/locationRoutes");
const productRouter = require("./Routes/productRoutes");
const cartRouter = require("./Routes/cartRoutes");
const shortRouter = require("./Routes/shortRoutes");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
  const MESSAGE = "App Working fine please go by `/api/user/`";
  res.status(200).json({ message: MESSAGE });
});

app.use("/api/user", userRoute);

app.use("/api/location", locationRouter);

app.use("/api/products", productRouter);

app.use('/api/cart', cartRouter);

app.use('/api/short', shortRouter);



module.exports = app;
