import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(
      "",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
