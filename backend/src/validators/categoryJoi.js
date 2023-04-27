import Joi from "joi";

const CategoryJoiSchema = {
  createCategory: Joi.object().keys({
    title: Joi.string().required(),
    categories: Joi.array().required(),
  }),

  updateCategory: Joi.object().keys({
    //title: Joi.string().required(),
    categories: Joi.array().required(),
  }),
};

export { CategoryJoiSchema };
