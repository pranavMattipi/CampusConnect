import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Student from "../models/student.model.js";

const router = express.Router();

// LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const { email, password, college } = req.body; // frontend must send college name

    // Find student by email and populate college
    const student = await Student.findOne({ email }).populate("college");
    if (!student) return res.status(404).json({ error: "Student not found" });

    // Check if student belongs to selected college
    if (!student.college || student.college.name !== college) {
      return res.status(403).json({ error: "You are not registered in this college" });
    }

    // Optional: check email domain matches college domain
    const emailDomain = email.split("@")[1];
    if (emailDomain !== student.college.domain) {
      return res.status(403).json({ error: "Invalid email domain" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    // Generate JWT token
    const token = jwt.sign(
      { id: student._id, college: student.college._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Respond with token and student info
    res.json({
      token,
      studentId: student._id,
      college: student.college.name,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
