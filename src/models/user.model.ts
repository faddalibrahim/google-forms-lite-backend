// Import necessary modules and types
import mongoose, { Schema, Document, Model } from "mongoose";
import { emailInvalid, passwordInvalid } from "../utils/validation.util";
import bcrypt from "bcrypt";

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
  },
});

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  salt: string;
}

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

interface IUserModel extends Model<IUser> {
  login(email: string, password: string): Promise<IUser>;
}

// static method to login user
userSchema.statics.login = async function (email: string, password: string) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect email or password");
  }
  throw new Error("incorrect email or password");
};

const User = mongoose.model<IUser, IUserModel>("User", userSchema);

export default User;
