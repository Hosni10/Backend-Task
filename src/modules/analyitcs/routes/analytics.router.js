import express from "express";
import analyticsController from "../controllers/analytics.controller.js";
import { validation } from "../../../middleware/validation.js";
import { analyticsSchema } from "../validations/analytics.validation.js";

const analyticsRouter = express.Router();

analyticsRouter.get(
  "/:id",
  validation(analyticsSchema),
  analyticsController.getUrlAanalytics
);

export default analyticsRouter;
