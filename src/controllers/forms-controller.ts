import { Request, Response } from "express";

const getAllForms = (req: Request, res: Response) => {
  res.json({
    successful: true,
    message: "Forms retrieved successfully!",
    data: [],
  });
};

// get single form
const getForm = (req: Request, res: Response) => {
  res.json({
    successful: true,
    message: "Form retrieved successfully!",
    data: {},
  });
};

// create form
const createForm = (req: Request, res: Response) => {
  const { form } = req.body;
  if (!form) {
    return res
      .status(400)
      .json({ successful: false, error: "No form received" });
  }
  res.json({ successful: true, message: "Form created successfully!" });
};

//delete form

const deleteForm = (req: Request, res: Response) => {
  console.log(req.params.id);
  res.json({ successful: true, message: "Form deleted successfully!" });
};

// update form
const updateForm = (req: Request, res: Response) => {
  const { id } = req.params;
  const { form } = req.body;
  if (!form) {
    return res
      .status(400)
      .json({ successful: false, error: "No form received" });
  }
  res.json({ successful: true, message: "Form updated successfully!" });
};

export { getAllForms, getForm, createForm, deleteForm, updateForm };
