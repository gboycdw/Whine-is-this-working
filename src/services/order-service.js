const orderModel = require("../db/models/order-models");

class OrderService {
  constructor() {
    this.orderModel = orderModel;
  }
  // --------------for server test-----------//
  async findUserOrder() {
    const order = await orderModel.findById();
    return order;
  }
  async findAllOrdersByAdmin() {
    // 모든 사용자의 주문내역을 확인하는 함수
    const asdf = [];
    const orders = await orderModel.findAllOrders();
    for (let i = 0; i < Object.values(orders).length; i++) {
      asdf.push(orders[i]);
    }
    // console.log(asdf, "현재service파일에서 출력중..");
    return asdf;
  }
}
const orderService = new OrderService(orderModel);

module.exports = { orderService };
