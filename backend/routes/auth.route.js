import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Student from "../models/student.model.js";

const router = express.Router();

// LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email }).populate("college");

    if (!student) return res.status(404).json({ error: "Student not found" });

    // Check email domain
    const emailDomain = email.split("@")[1];
    if (emailDomain !== student.college.domain) {
      return res.status(403).json({ error: "Invalid email domain" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    // Generate JWT
    const token = jwt.sign(
      { id: student._id, college: student.college._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      studentId: student.studentId,
      college: student.college.name,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
