import express, { Router, Request, Response } from "express";
import * as formResponsesController from "../../controllers/form-response.controller";
import requireAuth from "../../middlewares/require-auth.middleware";

const router: Router = express.Router();

router.use(requireAuth);

router.get("/", formResponsesController.getAllFormResponses);
router.get("/:id", formResponsesController.getFormResponse);
router.post("/", formResponsesController.createFormResponse);
router.put("/:id", formResponsesController.updateFormResponse);
router.delete("/:id", formResponsesController.deleteFormResponse);

export default router;
