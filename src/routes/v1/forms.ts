// src/routes/formRouter.ts
import express, { Router, Request, Response } from "express";
import form from "../../data/form";

const router: Router = express.Router();

// Sample data (can be replaced with a database)
let formData: { name: string; email: string }[] = [];

router.get("/:id", (req: Request, res: Response) => {
  const formId = req.params.id;
  res.json({
    successful: true,
    message: "Form retrieved successfully!",
    data: form,
  });
});

router.post("/", (req: Request, res: Response) => {
  const { form } = req.body;

  if (!form) {
    return res
      .status(400)
      .json({ successful: false, error: "Form structure is missing" });
  }

  res.status(201).json({
    successful: true,
    message: "Form Created Successfully!",
    data: req.body.form,
  });
});

router.delete("/:id", (req: Request, res: Response) => {
  console.log(req.params.id);
  res.json({ successful: true, message: "Form deleted successfully!" });
});

router.put("/:id", (req: Request, res: Response) => {
  res.json({ successful: true, message: "Form updated successfully!" });
});

export default router;
