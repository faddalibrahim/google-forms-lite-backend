import express, { Router, Request, Response } from "express";
import * as formResponsesController from "../../controllers/form-response.controller";

const router: Router = express.Router();


router.get("/", formResponsesController.getAllFormResponses);
router.get("/:id", formResponsesController.getFormResponse);
router.post("/", formResponsesController.createFormResponse);
router.put("/:id", formResponsesController.updateFormResponse);
router.delete("/:id", formResponsesController.deleteFormResponse);

export default router;
