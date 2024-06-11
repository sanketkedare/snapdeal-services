const express = require("express");
const cors = require("cors");
const userRoute = require("./Routes/userRoutes");
const locationRouter = require("./Routes/locationRoutes");
const productRouter = require("./Routes/productRoutes");
const cartRoutes = require("./Routes/cartRoutes");

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

app.use('/api/cart', cartRoutes);



module.exports = app;
