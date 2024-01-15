import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";
import {
  hasMissingFields,
  passwordsDontMatch,
  passwordInvalid,
  emailInvalid,
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

  if (passwordInvalid(password, 8)) {
    return res.status(400).json({
      successful: false,
      message:
        "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    });
  }

  if (passwordsDontMatch(password, repeatPassword)) {
    return res
      .status(400)
      .json({ successful: false, message: "Passwords do not match" });
  }

  if (emailInvalid(email)) {
    return res
      .status(400)
      .json({ successful: false, message: "Invalid email address" });
  }

  return res.json({ successful: true, message: "validation successful" });

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
