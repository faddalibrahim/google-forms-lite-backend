import mongoose from "mongoose";

const dbConnection = async () => {
  const dbURI = "mongodb://localhost:27017/xyforms";
  try {
    await mongoose.connect(dbURI);
    console.log("Connected to the database!");
  } catch (error) {
    console.error("Connection error:", error);
  }
};

export default dbConnection;
