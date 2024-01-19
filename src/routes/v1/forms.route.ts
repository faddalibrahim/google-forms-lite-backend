// src/routes/formRouter.ts
import express, { Router, Request, Response } from "express";
import * as formsController from "../../controllers/form.controller";

const router: Router = express.Router();

router.get("/", formsController.getForms);
router.get("/:id", formsController.getForm);
router.post("/", formsController.createForm);
router.delete("/:id", formsController.deleteForm);
router.patch("/:id", formsController.patchForm);

export default router;
