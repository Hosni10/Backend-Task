import Joi from "joi";

export const analyticsSchema = Joi.object({
  id: Joi.string().required().messages({
    "string.required": "The id field is required",
  }),
});
