import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  const { username, email, password, repeatPassword } = req.body;

  // missing fields
  if (!username || !email || !password || !repeatPassword) {
    return res
      .status(400)
      .json({ successful: false, message: "Missing required fields" });
  }

  // password length, passwords match, contains required characters
  if (password.length < 6) {
    return res
      .status(400)
      .json({
        successful: false,
        message: "Password must be at least 6 characters",
      });
  }

  // email validation
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return res
      .status(400)
      .json({ successful: false, message: "Invalid email address" });
  }

  try {
    await AuthService.registerUser({ username, email, password });

    res.status(201).json({
      successful: true,
      message: "Registration successful",
      user: { username, email },
    });
  } catch (err) {
    console.log(err);
    res.json({ successful: false, message: "Registration failed" });
  }
};

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Perform registration logic (validate inputs, save to database, etc.)
  // For simplicity, just log the received data in this example
  console.log("Login details:", { email, password });

  res.json({ successful: true, message: "Login successful" });
};
