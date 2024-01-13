import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
  res.json({
    successful: true,
    message: "Users retrieved successfully!",
    data: [],
  });
};

export const deleteUser = (req: Request, res: Response) => {
  res.json({ successful: true, message: "User deleted successfully!" });
};
