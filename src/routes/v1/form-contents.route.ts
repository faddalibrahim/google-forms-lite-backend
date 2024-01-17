import express, { Router } from "express";
import * as formContentController from "../../controllers/form-content.controller";

const router: Router = express.Router();

router.get("/:id", formContentController.getFormContent);
router.post("/", formContentController.createFormContent);
router.put("/:id", formContentController.updateFormContent);

export default router;
