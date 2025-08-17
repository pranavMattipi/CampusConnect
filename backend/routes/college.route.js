import express from "express";
import College from "../models/college.model.js";

const router = express.Router();

// Add new college
router.post("/add", async (req, res) => {
  try {
    const { name, domain, location } = req.body;
    const college = new College({ name, domain, location });
    await college.save();
    res.json(college);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all colleges
router.get("/", async (req, res) => {
  try {
    const colleges = await College.find();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
