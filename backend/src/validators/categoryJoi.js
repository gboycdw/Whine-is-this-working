import Joi from "joi";

const CategoryJoi = Joi.object().keys({
  title: Joi.string().required(),
  categories: Joi.array().required(),
});

export { CategoryJoi };
