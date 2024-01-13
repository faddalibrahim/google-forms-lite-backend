import { Request, Response } from "express";
import User from "../models/user-model";

export const register = async (req: Request, res: Response) => {
  const { username, email, password, salt } = req.body;

  if (!username || !email || !password || !salt) {
    return res
      .status(400)
      .json({ successful: false, message: "Missing required fields" });
  }

  try {
    // const user = new User({
    //   username,
    //   email,
    //   password,
    //   salt,
    // });

    //   user.save();
      

    const savedUser = await User.create({
      username,
      email,
      password,
      salt,
    })


    res.status(201).json({
      successful: true,
      message: "Registration successful",
      user: savedUser,
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
