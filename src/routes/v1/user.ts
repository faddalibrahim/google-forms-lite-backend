// src/routes/userRouter.ts
import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("User Route");
});

export default router;
