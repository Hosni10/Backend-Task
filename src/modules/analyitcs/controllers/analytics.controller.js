import catchAsync from "../../../utils/catchAsync.js";
import analyticsService from "../services/analytics.service.js";

const getUrlAanalytics = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await analyticsService.getUrlAanalytics(id);
  res.json({ data });
});

export default { getUrlAanalytics };
