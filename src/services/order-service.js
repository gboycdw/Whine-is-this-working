const { orderModel } = require("../db/models/order-models");

class OrderService {
  constructor(orderModel) {
    this.orderModel = orderModel;
  }
  async findAllProduct() {}
}

module.exports = { OrderService };
