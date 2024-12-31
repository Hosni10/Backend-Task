import { analyticsModel } from "../../analyitcs/models/analytics.model.js";
import { Url } from "../models/url.model.js";
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

  return {
    shortenedUrl: `https://digifly.com/${smallid}`,
  };
};

const getUrl = async (smallid, IPaddress) => {
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

  return { originalUrl: url.originalUrl };
};

export default { shortenedUrl, getUrl };
