// src/routes/formRouter.ts
import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

// Sample data (can be replaced with a database)
let formData: { name: string; email: string }[] = [];

router.get("/", (req: Request, res: Response) => {
  res.json(formData);
});

router.post("/", (req: Request, res: Response) => {
  const { name, email } = req.body;

  // Validate the request body
  if (!name || !email) {
    return res
      .status(400)
      .json({ error: "Name and email are required fields." });
  }

  // Process the form data (you can save to a database, etc.)
  // For now, let's push the data to the array
  formData.push({ name, email });

  res
    .status(201)
    .json({ message: "Form submitted successfully!", data: { name, email } });
});

router.delete("/", (req: Request, res: Response) => {
  res.json(formData);
});

router.patch("/", (req: Request, res: Response) => {
  res.json(formData);
});

export default router;
