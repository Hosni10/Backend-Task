import { Redis } from "ioredis";
import env from "./env.js";

const redisClient = new Redis(env.redisUrl);

export default redisClient;
