import Joi from "joi";

export const shortenUrlSchema = Joi.object({
  originalUrl: Joi.string().uri().required().messages({
    "string.empty": "Please provide an original URL",
    "string.uri": "Please provide a valid URL",
  }),
  expiresAt: Joi.date().optional().greater('now').message({
    "date.greater": "Please provide an expiration date that is in the future"
  })
});
