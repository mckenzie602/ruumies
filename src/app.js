// Import the tools we need
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env
dotenv.config();

// Create our app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// CORS: Allow front-end (e.g. Bubble) to access this backend
app.use(cors({
  origin: process.env.FRONTEND_URL || "*", // Restrict later!
}));

// Default route to check if it works
app.get("/", (req, res) => {
  res.send("Backend server is live! 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
