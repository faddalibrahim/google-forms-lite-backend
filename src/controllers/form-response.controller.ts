import { Request, Response } from "express";
import FormResponse from "../models/form-response.model";

export const getAllFormResponses = (req: Request, res: Response) => {
  res.json({
    successful: true,
    message: "Form responses retrieved successfully!",
    data: [],
  });
};

export const getFormResponse = (req: Request, res: Response) => {
  res.json({
    successful: true,
    message: "Form response retrieved successfully!",
    data: {},
  });
};

export const createFormResponse = (req: Request, res: Response) => {
  const { formResponse } = req.body;

  if (!formResponse) {
    return res
      .status(400)
      .json({ successful: false, error: "No form entry received" });
  }

  const newFormResponse = new FormResponse(formResponse);
  newFormResponse.save();

  res.json({
    successful: true,
    message: "Form response created successfully!",
    data: {},
  });
};

export const updateFormResponse = (req: Request, res: Response) => {
  res.json({
    successful: true,
    message: "Form response updated successfully!",
    data: {},
  });
};

export const deleteFormResponse = (req: Request, res: Response) => {
  res.json({
    successful: true,
    message: "Form response deleted successfully!",
    data: {},
  });
};
