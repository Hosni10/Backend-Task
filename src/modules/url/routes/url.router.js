import express from "express";
import { getUrl, shortenUrl } from "../controllers/url.controller.js";
import { validation } from "../../../middleware/validation.js";
import { shortenUrlSchema } from "../validations/url.validation.js";

const urlRouter = express.Router();

urlRouter.post("/shorten", validation(shortenUrlSchema), shortenUrl);
urlRouter.get("/:smallid", getUrl);

export default urlRouter;
