import Joi from "joi"

export const shortenUrlSchema = Joi.object({
originalUrl: Joi.string().uri().required().messages({
    "string.empty": "Please provide an original URL",
    "string.uri": "Please provide a valid URL"

})
});

