import mongoose from "mongoose";
import env from "./env.js";

export function dbConnection() {
  mongoose
    .connect(env.dbUrl)
    .then(() => console.log("Connected to Database"))
    .catch((err) => {
      console.log("Failed to connect to Database:", err);
    });
}
