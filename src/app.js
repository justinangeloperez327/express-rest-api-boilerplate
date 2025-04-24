require("./utils/env");
const express = require("express");
const errorHandler = require("./utils/errorHandlers");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDB = require("./config/database");

const app = express();
dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());
// app.use(morgan("dev"));
// app.use(helmet());

app.use("/api", require("./routes/index"));

app.use(errorHandler);

app.listen(env("PORT", 3000), () => {
  console.log("Environment variables loaded successfully");
  console.log("MongoDB connection initialized successfully");
  console.log("Server initialized successfully");
  console.log("CORS enabled successfully");
  console.log("Go to http://localhost:3000 to see the server running");
});
