// src/routes/formRouter.ts
import express, { Router, Request, Response } from "express";
import * as formsController from "../../controllers/form.controller";
import {requireAuth} from "../../middlewares/auth.middleware";

const router: Router = express.Router();

router.use(requireAuth);

router.get("/", formsController.getAllForms);
router.get("/:id", formsController.getForm);
router.post("/", formsController.createForm);
router.delete("/:id", formsController.deleteForm);
router.patch("/:id", formsController.patchForm);

export default router;
