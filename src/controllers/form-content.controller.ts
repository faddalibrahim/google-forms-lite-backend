import { Request, Response } from "express";

export const getFormContent = (req: Request, res: Response) => {
  res.json({
    successful: true,
    message: "Form content retrieved successfully!",
    data: {},
  });
};

export const updateFormContent = (req: Request, res: Response) => {
  res.json({
    successful: true,
    message: "Form content updated successfully!",
    data: {},
  });
};

export const deleteFormContent = (req: Request, res: Response) => {
  res.json({
    successful: true,
    message: "Form content deleted successfully!",
    data: {},
  });
};

export const createFormContent = (req: Request, res: Response) => {
  const { formContent } = req.body;

  if (!formContent) {
    return res
      .status(400)
      .json({ successful: false, error: "No form content received" });
  }

  res.json({
    successful: true,
    message: "Form content created successfully!",
    data: formContent,
  });
};
