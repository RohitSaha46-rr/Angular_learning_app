import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection done");
  } catch (err) {
    console.error("connection failed:", err);
    process.exit(1);
  }
};

export default connectDB;

