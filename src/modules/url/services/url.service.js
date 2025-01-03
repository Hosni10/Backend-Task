import redisService from "../../common/services/redis.service.js";
import { analyticsModel } from "../../analyitcs/models/analytics.model.js";
import { Url } from "../models/url.model.js";
import helpers from "../../../utils/helpers.js";
import shortid from "shortid";

const shortenedUrl = async (originalUrl, expiresAt) => {
  let smallid = "";

  const existingUrl = await Url.findOne({
    originalUrl,
    expiresAt: { $gte: Date.now() },
  });

  if (existingUrl) {
    smallid = existingUrl.smallid;
    return {
      shortenedUrl: `https://digifly.com/${existingUrl.smallid}`,
    };
  }

  smallid = shortid.generate();

  const shortUrl = new Url({
    originalUrl,
    smallid,
    createdAt: new Date(),
    expiresAt,
  });

  await shortUrl.save();

  console.log("cached original url");

  let expInSecs = null;

  if (expiresAt) {
    expInSecs = helpers.calculateDiffInSecs(expiresAt);
  }

  console.log(expInSecs, "expInSecs");

  await redisService.set(smallid, originalUrl, expInSecs);

  return {
    shortenedUrl: `https://digifly.com/${smallid}`,
  };
};

const getUrl = async (smallid, IPaddress) => {
  const originalUrl = await redisService.get(smallid);

  if (originalUrl) {
    console.log("get from cache");
    return { originalUrl };
  }

  console.log("get from database");

  const url = await Url.findOne({ smallid });

  if (!url) {
    throw new Error("URL not found");
  }

  if (url.expiresAt < new Date()) {
    throw new Error("URL has expired");
  }

  await Url.findByIdAndUpdate(url._id, { $inc: { numberOfVisits: 1 } });

  await analyticsModel.create({
    urlId: url._id,
    IPaddress,
    timestamp: new Date(),
  });

  let expInSecs = null;

  if (expiresAt) {
    expInSecs = helpers.calculateDiffInSecs(expiresAt);
  }

  await redisService.set(smallid, url.originalUrl, expInSecs);

  console.log("cached original url");

  return { originalUrl: url.originalUrl };
};

export default { shortenedUrl, getUrl };
