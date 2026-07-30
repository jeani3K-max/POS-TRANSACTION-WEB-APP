const express = require("express");
const cors = require("cors");
const db = require("./db");
const transactionRoutes = require("./routes/transactions");
const authRoutes = require("./routes/auth");


const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());

app.use("/transactions", transactionRoutes);
app.use("/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("POS Transaction API is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});