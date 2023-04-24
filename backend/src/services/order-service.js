// const orderModel = require("../db/models/order-models");
import { orderModel } from "../db/index.js";

class OrderService {
  constructor() {
    this.orderModel = orderModel;
  }
  // 유저 아이디(이메일)로 해당 유저의 주문내역을 확인하는 기능
  async findUserOrder(userId) {
    const order = await orderModel.findById(userId);
    return order;
  }
  // 모든 주문내역을 확인하는 기능
  async findAllOrdersByAdmin() {
    let result = [];
    const orders = await orderModel.findAllOrders();
    for (let i = 0; i < Object.values(orders).length; i++) {
      result.push(orders[i]);
    }
    return result;
  }
  // 새로운 주문을 생성하는 기능
  async createNewOrder(orderInfo) {
    const newOrders = await orderModel.createOrder(orderInfo);
    return newOrders;
  }
  // 유저가 주문번호로 검색하여 주문정보를 변경하는 기능
  async changeUsersOrder(orderNumber, updateInfo) {
    const changeOrders = await orderModel.changeOrder(orderNumber, updateInfo);
    return changeOrders;
  }
  // 관리자가 주문번호로 검색하여 특정 유저의 주문을 삭제하는 기능
  async deleteOrderByAdmin(orderNumber) {
    const deleteOrder = await orderModel.deleteAll(orderNumber);
    return deleteOrder;
  }
  // 유저가 주문번호로 검색하여 배송 시작 전의 자신의 주문을 취소하는 기능
  async deleteOrderByUser(orderNumber) {
    const cancelOrder = await orderModel.cancelOrder(orderNumber);
    return cancelOrder;
  }
  // 관리자가 주문번호로 검색하여 해당 주문의 배송 상태를 변경하는 기능
  async changeStatusByAdmin(orderNumber, status) {
    const changeShippingStatus = await orderModel.changeStatus(
      orderNumber,
      status
    );
    return changeShippingStatus;
  }
  // 관리자가 주문번호로 검색하여 해당 주문의 운송장번호를 변경하는 기능
  async changeWayBillByAdmin(orderNumber, waybill) {
    const changeWayBill = await orderModel.changeWayBill(orderNumber, waybill);
    return changeWayBill;
  }
}
const orderService = new OrderService(orderModel);

// module.exports = { orderService };
export { orderService };
