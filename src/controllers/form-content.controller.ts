import { Request, Response } from "express";
import * as FormContentService from "../services/form-content.service";

export const getFormContent = async (req: Request, res: Response) => {
  const { id: formId } = req.params;

  if (!formId) {
    return res
      .status(400)
      .json({ successful: false, error: "No form content id provided" });
  }

  try {
    const formContent = await FormContentService.getFormContent(formId);
    if (!formContent) {
      return res
        .status(400)
        .json({ successful: false, error: "No form content found" });
    } else {
      res.json({ successful: true, data: formContent });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ successful: false, error: "Error getting form content" });
  }
};

export const updateFormContent = async (req: Request, res: Response) => {
  const { id:formId } = req.params;

  if (!formId) {
    return res
      .status(400)
      .json({ successful: false, error: "No form content id provided" });
  }

  if (!req.body) {
    return res
      .status(400)
      .json({ successful: false, error: "No form content received" });
  }

  try {
    const formContent = await FormContentService.updateFormContent(formId,req.body);
    res.json({ successful: true, data: formContent });
  } catch (error) {
    return res
      .status(400)
      .json({ successful: false, error: "Error updating form content" });
  }
};

export const createFormContent = async (req: Request, res: Response) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ successful: false, error: "No form content received" });
  }

  try {
    const formContent = await FormContentService.createFormContent(req.body);
    res.status(201).json({ successful: true, data: formContent });
  } catch (error) {
    return res
      .status(400)
      .json({ successful: false, error: "Error creating form content" });
  }
};
