import { Request, Response } from "express";
import * as FormService from "../services/form.service";

export const getForms = async (req: Request, res: Response) => {
  console.log(req.query);

  const { page, pageSize } = req.query;
  // make sure page and pageSize are present and are numbers
  if (!page || !pageSize || !Number(page) || !Number(pageSize)) {
    return res
      .status(400)
      .json({ successful: false, error: "invalid query parameters" });
  }

  try {
    const skip = (Number(page) - 1) * Number(pageSize);
    const limit = Number(pageSize);
    const userId = res.locals.user.id;

    const forms = await FormService.getForms(userId, skip, limit);
    if (!forms) {
      return res
        .status(400)
        .json({ successful: false, error: "Error getting forms" });
    }

    res.status(200).json({ successful: true, data: forms });
  } catch (error) {
    return res
      .status(400)
      .json({ successful: false, error: "Error getting forms" });
  }
};

// get single form
export const getForm = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .json({ successful: false, error: "Error getting form" });
  }

  try {
    const form = await FormService.getForm(id, res.locals.user.id);
    if (!form) {
      return res
        .status(400)
        .json({ successful: false, error: "Error getting form" });
    }

    res.status(200).json({ successful: true, data: form });
  } catch (error) {
    return res
      .status(400)
      .json({ successful: false, error: "Error getting form" });
  }
};

// create form
export const createForm = async (req: Request, res: Response) => {
  try {
    const savedForm = await FormService.createForm({
      _userId: res.locals.user.id,
    });
    res.status(201).json({ successful: true, data: savedForm });
  } catch (error) {
    return res
      .status(400)
      .json({ successful: false, error: "Error creating form" });
  }
};

//delete form
export const deleteForm = async (req: Request, res: Response) => {
  if (!req.params.id) {
    return res
      .status(400)
      .json({ successful: false, error: "Error deleting form" });
  }

  try {
    const deletedForm = await FormService.deleteForm(req.params.id);
    res.status(200).json({ successful: true, data: deletedForm });
  } catch (error) {
    return res
      .status(400)
      .json({ successful: false, error: "Error deleting form" });
  }
};

// update form
export const patchForm = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .json({ successful: false, error: "Error updating form" });
  }

  try {
    const patchedForm = await FormService.patchForm(id, req.body);
    res.status(200).json({ successful: true, data: patchedForm });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ successful: false, error: "Error updating form" });
  }
};
