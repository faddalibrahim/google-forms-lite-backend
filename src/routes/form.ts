// src/routes/formRouter.ts
import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Form Route");
});

export default router;
