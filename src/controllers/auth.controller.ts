import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";
import {
  hasMissingFields,
  passwordsDontMatch,
  parseMongooseValidationErrors,
} from "../utils/validation.util";

export const register = async (req: Request, res: Response) => {
  const { username, email, password, repeatPassword } = req.body;

  if (
    hasMissingFields(req.body, [
      "username",
      "email",
      "password",
      "repeatPassword",
    ])
  ) {
    return res
      .status(400)
      .json({ successful: false, message: "Missing required fields" });
  }

  if (passwordsDontMatch(password, repeatPassword)) {
    return res
      .status(400)
      .json({ successful: false, message: "Passwords do not match" });
  }

  try {
    const savedUser = await AuthService.registerUser({
      username,
      email,
      password,
    });

    res.status(201).json({
      successful: true,
      message: "Registration successful",
      user: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      successful: false,
      message: "Registration failed",
      errors: parseMongooseValidationErrors(error),
    });
  }
};

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Perform registration logic (validate inputs, save to database, etc.)
  // For simplicity, just log the received data in this example
  console.log("Login details:", { email, password });

  res.json({ successful: true, message: "Login successful" });
};
