import { ApiError } from "../utils/apiError.js";

export const validation = (schema) => {
  return (req, res, next) => {
    let inputs = { ...req.body, ...req.params, ...req.query };
    let { error } = schema.validate(inputs, { abortEarly: false });
    if (error) {
      let errors = error.details.map((detail) => detail.message);
      throw new ApiError(errors[0], 400);
    } else {
      next();
    }
  };
};
