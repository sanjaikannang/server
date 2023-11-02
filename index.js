import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import connectDB from "./connectMongoDB.js";
import tagsRoutes from "./routes/tagsRoutes.js"

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// app.use('/',(req, res) => {
//     res.send("This is a stack overflow clone API")
// })

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);
app.use("/tags", tagsRoutes);
app.use('/api', questionRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
