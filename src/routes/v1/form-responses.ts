import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  console.log(req.params.id);
  res.json({
    successful: true,
    message: "Form responses retrieved successfully!",
    data: [],
  });
});

router.get("/:id", (req: Request, res: Response) => {
  res.json({
    successful: true,
    message: "Form response retrieved successfully!",
    data: {},
  });
});

router.post("/", (req: Request, res: Response) => {
  const { formResponse } = req.body;

  if (!formResponse) {
    return res
      .status(400)
      .json({ successful: false, error: "No form entry received" });
  }

  res.json({
    successful: true,
    message: "Form response created successfully!",
    data: {},
  });
});

router.put("/:id", (req: Request, res: Response) => {
  const { formResponse } = req.body;

  if (!formResponse) {
    return res
      .status(400)
      .json({ successful: false, error: "No form entry received" });
  }

  res.json({
    successful: true,
    message: "Form response updated successfully!",
    data: {},
  });
});

export default router;
