import { Url } from "../../../database/models/url.model.js";
import shortid from "shortid";

const shortenedUrl = async (originalUrl) => {

  let smallid = "";

  const existingUrl = await Url.findOne({ originalUrl });

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
  });

  await shortUrl.save();

  return {
    shortenedUrl: `https://digifly.com/${smallid}`,
  };
};


export default { shortenedUrl };
