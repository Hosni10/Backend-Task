import env from "../../../config/env.js";
import redis from "../../../config/redis.js";

const set = async (key, value, expInSecs = null) => {
  try {
    await redis.set(key, value, "EX", expInSecs || env.redisTTL);
  } catch (err) {
    console.error("Error setting Redis key", err);
    throw err;
  }
};

const get = async (key) => {
  return await redis.get(key);
};

export default {
  set,
  get,
};
