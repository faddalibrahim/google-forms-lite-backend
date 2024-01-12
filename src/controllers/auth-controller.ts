import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  // Perform registration logic (validate inputs, save to database, etc.)
  // For simplicity, just log the received data in this example
  console.log("Received registration data:", { email, username, password });

  res.json({ successful: true, message: "Registration successful" });
};

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Perform registration logic (validate inputs, save to database, etc.)
  // For simplicity, just log the received data in this example
  console.log("Login details:", { email, password });

  res.json({ successful: true, message: "Login successful" });
};
