// Import necessary modules and types
import mongoose, { Schema, Document } from "mongoose";
import { emailInvalid, passwordInvalid } from "../utils/validation.util";

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
    validate: [
      (password: string) => !passwordInvalid(password, 8),
      "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ],
    select: false,
  },
  salt: { type: String, required: true, select: false },
});

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  salt: string;
}

const User = mongoose.model<IUser>("User", userSchema);

export default User;
