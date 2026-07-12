import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

// Load environment variables FIRST
dotenv.config();

// Then connect to DB
connectDB();

const app = express();
// middelware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
