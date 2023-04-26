import Joi from "joi";

const ProductJoi = Joi.object().keys({
  name: Joi.string(),
  brand: Joi.string().required(),
  type: Joi.string().required(),
  country: Joi.string().required(),
  region: Joi.string().required(),
  imgUrl: Joi.string().required(),
  info: Joi.string().required(),
  price: Joi.number().required(),
  discountPrice: Joi.number().required(),
  saleCount: Joi.number().required(),
  saleState: Joi.string().required(),
  isPicked: Joi.boolean().required(),
  isBest: Joi.boolean().required(),
  inventory: Joi.number().required(),
  tags: Joi.array().required(),
  features: Joi.object().required(),
});
export { ProductJoi };
