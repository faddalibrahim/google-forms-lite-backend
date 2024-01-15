// Import necessary modules and types
import mongoose, { Schema, Document } from "mongoose";
import { emailInvalid } from "../utils/validation.util";

// Define a schema
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    lowercase: true,
    minlength: [6, "Username must be at least 4 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [(email: string) => !emailInvalid(email), "Email is invalid"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
  },
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
