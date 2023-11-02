import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error("mongo DB connection failed!",error);
    process.exit(1);
  }
};

export default connectDB;