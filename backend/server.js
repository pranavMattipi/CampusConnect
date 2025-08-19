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


//STUDENT FORMAT
//http://localhost:8000/api/students/add
// {
//   "name": "ParamM",
//   "rollNumber": "CSE2025026",
//   "branch": "Computer Science",
//   "year": 2,
//   "email": "se24ucse144@iitd.ac.in",
//   "password": "helloworld123",
//   "collegeId": "68a333cfa5fc739f0ea5ccd5"
// }


//COLLEGE FORMAT
//http://localhost:8000/api/colleges/add
// {
//   "name": "Mahindra University",
//   "domain": "mahindrauniversity.edu.in",
//   "acquired": false
// }