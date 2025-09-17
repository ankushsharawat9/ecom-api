import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.DB_URL;

export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url);
    console.log(`✅ MongoDB connected to: ${mongoose.connection.name}`);
  } catch (err) {
    console.error("❌ Error while connecting to MongoDB", err);
    process.exit(1);
  }
};
