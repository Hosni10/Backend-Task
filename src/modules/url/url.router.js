import express from "express";
import { shortenUrl } from "./url.controller.js";
import { validation } from "../../middleware/validation.js";
import { shortenUrlSchema } from "./url.validation.js";

const urlRouter = express.Router();

urlRouter.post("/shorten", validation(shortenUrlSchema), shortenUrl);

export default urlRouter;
