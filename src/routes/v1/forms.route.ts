// src/routes/formRouter.ts
import express, { Router, Request, Response } from "express";
import * as formsController from "../../controllers/form.controller";

const router: Router = express.Router();

router.get("/", formsController.getAllForms);
router.get("/:id", formsController.getForm);
router.post("/", formsController.createForm);
router.delete("/:id", formsController.deleteForm);
router.put("/:id", formsController.updateForm);

export default router;
