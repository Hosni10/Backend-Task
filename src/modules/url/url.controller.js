import catchAsync from "../../middleware/catchAsync.js";
import urlService from "./url.service.js";

const shortenUrl = catchAsync(async (req, res) => {
  const { originalUrl } = req.body;
  const data = await urlService.shortenedUrl(originalUrl);
  res.json({ data });
});



export { shortenUrl };
