import Joi from "joi";

const OrderJoiSchema = {
  newOrder: Joi.object().keys({
    orderIndex: Joi.string().required(),
    buyer: Joi.string().required(),
    buyerEmail: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    buyerPhoneNumber: Joi.string().required(),
    recipientName: Joi.string().required(),
    recipientPhoneNumber: Joi.string().required(),
    shippingAddress: Joi.string().required(),
    shippingExtraAddress: Joi.string(),
    shippingPostalCode: Joi.string().required(),
    shippingRequest: Joi.string(),
    shippingStatus: Joi.string().required(),
    wayBill: Joi.string().required(),
    totalPrice: Joi.number().required(),
    deliveryFee: Joi.number().required(),
    orderList: Joi.array().required(),
  }),

  changeOrder: Joi.object().keys({
    orderIndex: Joi.string().required(),
    buyerEmail: Joi.string(),
    buyerPhoneNumber: Joi.string(),
    recipientName: Joi.string(),
    recipientPhoneNumber: Joi.string(),
    shippingAddress: Joi.string(),
    shippingExtraAddress: Joi.string(),
    shippingRequest: Joi.string(),
  }),
  changeWayBill: Joi.object().keys({
    orderIndex: Joi.string().required(),
    wayBill: Joi.string().required(),
  }),
  changeShippingStatus: Joi.object().keys({
    orderIndex: Joi.string().required(),
    shippingStatus: Joi.string().required(),
  }),
};
export { OrderJoiSchema };
