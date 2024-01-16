import mongoose from "mongoose";

const dbConnection = async () => {
  const dbURI = process.env.DATABASE_URI || "mongodb://localhost:27017/xyforms";
  try {
    const connection = await mongoose.connect(dbURI);
    return connection;
  } catch (error) {
    throw error;
  }
};

export default dbConnection;
