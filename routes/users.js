import express from "express";

import { login, signup } from "../controllers/auth.js";
import { getAllUsers, updateProfile } from "../controllers/users.js";
import auth from "../middleware/auth.js";
import User from "../models/auth.js";
import Question from "../models/Questions.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);

// Get the current user's profile
router.get("/profile", auth, async (req, res) => {
    try {
      // Assuming the user ID is available in req.userId
      const user = await User.findById(req.userId).select("name about");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
});

router.get("/questions", auth, async (req, res) => {
    try {
      // Assuming the user ID is available in req.userId
      const questions = await Question.find({ userId: req.userId });
      res.status(200).json(questions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  });



export default router;