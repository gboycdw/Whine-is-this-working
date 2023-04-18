const orderModel = require("../db/models/order-models");

class OrderService {
  constructor() {
    this.orderModel = orderModel;
  }
  //--------------for server test-----------//
  //   async gogomao() {
  //     const orders = await orderModel.gomao();
  //     return orders;
  //   }
}
const orderService = new OrderService(orderModel);

module.exports = { orderService };
