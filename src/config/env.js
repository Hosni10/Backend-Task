import { config } from "dotenv";

config();

export default {
  port: process.env.PORT || 6000,
  dbUrl: process.env.MONGO_URI,
};
