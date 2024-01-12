// Import necessary modules and types
import mongoose, { Schema, Document } from "mongoose";

// Define a schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true, lowercase: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
});

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  salt: string;
}

const User = mongoose.model<IUser>("user", userSchema);

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/your-database", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "Connection error:"));
// db.once("open", () => {
//   console.log("Connected to the database!");
// });

// // Example usage
// const newUser = new User({ name: "John Doe", age: 25 });

// newUser.save((err, user) => {
//   if (err) return console.error(err);
//   console.log("User saved:", user);
// });

export default User;
