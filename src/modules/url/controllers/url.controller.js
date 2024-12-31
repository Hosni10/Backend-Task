import catchAsync from "../../../utils/catchAsync.js";
import urlService from "..//services/url.service.js";

const shortenUrl = catchAsync(async (req, res) => {
  const { originalUrl, expiresAt } = req.body;
  const data = await urlService.shortenedUrl(originalUrl, expiresAt);
  res.json({ data });
});

const getUrl = catchAsync(async (req, res) => {
  const { smallid } = req.params;
  const data = await urlService.getUrl(smallid, req.ip);
  res.redirect(data.originalUrl);
});

export { shortenUrl, getUrl };
