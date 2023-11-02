import mongoose from "mongoose";
import Questions from "../models/Questions.js";

export const postAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { answerBody, userAnswered, userId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable...");
  }

  try {
    const updatedQuestion = await Questions.findByIdAndUpdate(
      _id,
      {
        $push: {
          answers: {
            answerBody,
            userAnswered,
            userId,
          },
        },
      },
      { new: true }
    );

    if (!updatedQuestion) {
      return res.status(404).send("Question not found.");
    }

    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json("Error in updating");
  }
};


