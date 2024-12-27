import mongoose from "mongoose";
import { config } from "dotenv";
config()

export function dbConnection() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to Database"))
    .catch((err) => {
      console.log("Failed to connect to Database:", err);
    });
}
