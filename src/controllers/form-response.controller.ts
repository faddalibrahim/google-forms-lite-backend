import { Request, Response } from "express";
import * as FormService from "../services/form-response.service";

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

export const createFormResponse = async (req: Request, res: Response) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ successful: false, error: "No form entry received" });
  }

  try {
    const savedFormResponse = await FormService.createFormResponse(req.body);

    res.status(201).json({ successful: true, data: savedFormResponse });
  } catch (error) {
    return res
      .status(400)
      .json({ successful: false, error: "Error creating form entry" });
  }
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
