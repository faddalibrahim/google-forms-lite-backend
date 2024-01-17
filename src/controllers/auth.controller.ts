import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";
import {
  passwordsDontMatch,
  parseMongooseValidationErrors,
  getMissingFields,
} from "../utils/validation.util";
import jwt from "jsonwebtoken";

const maxAge = 3 * 24 * 60 * 60;
const JWT_SECRET = process.env.JWT_SECRET || "";
const createToken = (id: string) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: maxAge,
  });
};

export const register = async (req: Request, res: Response) => {
  const { username, email, password, repeatPassword } = req.body;

  let missingFields = getMissingFields(req.body, [
    "username",
    "email",
    "password",
    "repeatPassword",
  ]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      successful: false,
      errors: missingFields.map((field) => ({
        [field]: `${field} is required`,
      })),
    });
  }

  if (passwordsDontMatch(password, repeatPassword)) {
    return res.status(400).json({
      successful: false,
      errors: [{ password: "Passwords don't match" }],
    });
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
      errors: parseMongooseValidationErrors(error),
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  let missingFields = getMissingFields(req.body, ["email", "password"]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      successful: false,
      errors: missingFields.map((field) => ({
        [field]: `${field} is required`,
      })),
    });
  }

  try {
    const user = await AuthService.loginUser(email, password);

    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(200).json({
      successful: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      successful: false,
      error: error.message,
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("jwt");
  res.status(200).json({
    successful: true,
    message: "Logout successful",
  });
};
