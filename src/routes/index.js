const express = require("express");

const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Import routes
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");

// // Use routes
router.use("/auth", authRoutes);
router.use("/users", userRoutes);

module.exports = router;
