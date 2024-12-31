import { Url } from "../../url/models/url.model.js";
import { analyticsModel } from "../models/analytics.model.js";

const getUrlAanalytics = async (id) => {
  const url = await Url.findById(id);
  const analytics = await analyticsModel.find({ urlId: String(id) });
  return { analytics, numberOfVisits: url.numberOfVisits };
};

export default { getUrlAanalytics };
