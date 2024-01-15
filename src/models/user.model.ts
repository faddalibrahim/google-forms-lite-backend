// Import necessary modules and types
import mongoose, { Schema, Document } from "mongoose";

// Define a schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true, lowercase: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minLength: 8 },
  salt: { type: String, required: true },
});

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  salt: string;
}

const User = mongoose.model<IUser>("User", userSchema);

export default User;
