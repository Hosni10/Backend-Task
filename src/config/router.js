import { Router } from "express";
import urlRouter from "../modules/url/routes/url.router.js";
import analyticsRouter from "../modules/analyitcs/routes/analytics.router.js";

const router = new Router();

router.use("/url", urlRouter);
router.use("/analytics", analyticsRouter);


export default router;
