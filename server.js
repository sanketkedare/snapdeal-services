const app = require('./app.js')
const connectToDB = require("./Config/connectToDB");
const cors = require('cors')
require("dotenv").config();

const PORT = process.env.PORT || 3001

app.use(cors());
connectToDB();

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
