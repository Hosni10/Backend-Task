import express from "express";
import { dbConnection } from "../config/dbConnection.js";
import router from "../config/router.js";

const app = express();

app.use(express.json());

app.use("/api/v1", router);

dbConnection();

export default app;