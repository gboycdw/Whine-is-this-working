// const orderModel = require("../db/models/order-models");
import { orderModel } from "../db/index.js";

class OrderService {
  constructor() {
    this.orderModel = orderModel;
  }
  // 특정 사용자의 주문내역을 확인하는 기능
  async findUserOrder(userName) {
    const order = await orderModel.findById(userName);
    return order;
  }
  // 모든 사용자의 주문내역을 확인하는 기능
  async findAllOrdersByAdmin() {
    let result = [];
    const orders = await orderModel.findAllOrders();
    for (let i = 0; i < Object.values(orders).length; i++) {
      result.push(orders[i]);
    }
    return result;
  }
  // 유저가 새로운 주문을 할 수 있는 기능
  // 주문 시 제출 정보에 userName이 포함되기 때문에 parameter로 사용하지 않음.
  async createNewOrder(orderInfo) {
    const newOrders = await orderModel.createOrder(orderInfo);
    return newOrders;
  }
  // 유저가 주문내역을 추가할 수 있는 기능
  async changeUsersOrder(orderIndex, updateInfo) {
    const changeOrders = await orderModel.changeOrder(orderIndex, updateInfo);
    return changeOrders;
  }
  // 관리자가 특정 유저의 주문을 삭제하는 기능
  async deleteOrderByAdmin(orderIndex) {
    const deleteOrder = await orderModel.deleteAll(orderIndex);
    return deleteOrder;
  }
  // 유저가 배송 시작 전의 자신의 주문을 취소하는 기능
  async deleteOrderByUser(orderIndex) {
    const cancelOrder = await orderModel.cancelOrder(orderIndex);
    return cancelOrder;
  }
  // 관리자가 특정 유저의 배송 상태를 변경하는 기능
  async changeStatusByAdmin(orderIndex, status) {
    const changeShippingStatus = await orderModel.changeStatus(
      orderIndex,
      status
    );
    return changeShippingStatus;
  }
}
const orderService = new OrderService(orderModel);

// module.exports = { orderService };
export { orderService };
