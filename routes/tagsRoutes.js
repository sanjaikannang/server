import express from "express";
const router = express.Router();
import Questions from "../models/Questions.js";

// Route to get all unique tags
router.get("/tags", async (req, res) => {
  try {
    const tags = await Questions.distinct("questionTags");
    res.status(200).json(tags);
  } catch (error) {
    console.error("Error fetching tags:", error);
    res.status(500).json({ error: "Failed to fetch tags" });
  }
});

export default router;
