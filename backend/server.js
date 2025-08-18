import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

// Routes
import eventRoutes from "./routes/event.route.js";
import authRoutes from "./routes/auth.route.js";
import studentRoutes from "./routes/student.route.js";
import collegeRoutes from "./routes/college.route.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/events", eventRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/colleges", collegeRoutes);

// Base route
app.get("/", (req, res) => {
  res.send("College Events & Student API is running...");
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
