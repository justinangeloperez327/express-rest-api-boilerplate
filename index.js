const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
