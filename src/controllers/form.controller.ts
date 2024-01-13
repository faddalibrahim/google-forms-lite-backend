import { Request, Response } from "express";
import Form from "../models/form.model";

export const getAllForms = (req: Request, res: Response) => {
  res.json({
    successful: true,
    message: "Forms retrieved successfully!",
    data: [],
  });
};

// get single form
export const getForm = (req: Request, res: Response) => {
  res.json({
    successful: true,
    message: "Form retrieved successfully!",
    data: {},
  });
};

// create form
export const createForm = (req: Request, res: Response) => {
  const { form } = req.body;
  if (!form) {
    return res
      .status(400)
      .json({ successful: false, error: "No form received" });
  }

  const newForm = new Form(form);
  newForm.save();

  res.json({ successful: true, message: "Form created successfully!" });
};

//delete form
export const deleteForm = (req: Request, res: Response) => {
  console.log(req.params.id);
  res.json({ successful: true, message: "Form deleted successfully!" });
};

// update form
export const updateForm = (req: Request, res: Response) => {
  const { id } = req.params;
  const { form } = req.body;
  if (!form) {
    return res
      .status(400)
      .json({ successful: false, error: "No form received" });
  }
  res.json({ successful: true, message: "Form updated successfully!" });
};
