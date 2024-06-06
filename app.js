const express = require('express');
const cors = require('cors')
const userRoute = require("./Routes/userRoutes");

const app = express();
app.use(cors());

app.use(express.json())

app.get("/", async (req, res) => res.status(200).json({message : 'App Working fine please go by `/api/user/`'}));

app.use("/api/user", userRoute);


module.exports = app;