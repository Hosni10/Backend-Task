import express from "express";
import { dbConnection } from "../config/dbConnection.js";
import router from "../config/router.js";
import errorMiddleware from "../middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/v1", router);

app.use(errorMiddleware);

dbConnection();

export default app;
