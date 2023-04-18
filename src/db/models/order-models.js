const mongoose = require("mongoose");
const OrderSchema = require("../schemas/order-schema");
const Order = mongoose.model("orders", OrderSchema);

class OrderModel {
  async findById(orderId) {
    const order = await Order.findOne({ id: orderId });
    return order;
  }
  async findAllProduct() {
    const orderList = await Order.find()
      .populate("buyer")
      .populate("productList")
      .populate("priceList")
      .populate("totalPrice");
    return orderList;
  }
}

const orderModel = new OrderModel();
module.exports = orderModel;
