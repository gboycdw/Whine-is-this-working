// const mongoose = require("mongoose");
import mongoose from "mongoose";
// const OrderSchema = require("../schemas/order-schema");
import OrderSchema from "../schemas/order-schema.js";
// const ObjectId = mongoose.Types.ObjectId; // 미사용
import { nanoid } from "nanoid";

const Order = mongoose.model("orders", OrderSchema);

class OrderModel {
  // 이름으로 사용자의 주문내역을 검색하는 기능.
  async findById(userId) {
    const userOrder = await Order.find({ buyerEmail: userId }).lean();
    return userOrder;
  }
  // [Admin] 모든 사용자의 주문내역을 조회하는 기능.
  async findAllOrders() {
    const allOrders = await Order.find({}).lean();
    return allOrders;
  }
  // 새 주문을 생성하는 기능. // 저장할 때 orderinfo에 추가로 고유 식별자를 저장해야 함.
  async createOrder(orderInfo) {
    try {
      const newOrder = await Order.create(orderInfo);
      //----------------고유한 주문번호를 생성하는 부분---------------//
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      const currentDate = year + month + day;
      const newIndex = nanoid(6);
      newOrder.orderIndex = currentDate + newIndex;
      //---------생성한 주문번호를 저장---------//
      const newOrderList = await newOrder.save();
      return newOrderList;
    } catch (err) {
      console.log(err);
      throw new Error("주문 생성 실패");
    }
  }
  // 기존 주문을 변경하는 기능. - 주문 고유 정보로 찾아야함 ★★★★★★★★★★★★★★★★
  async changeOrder(orderIndex, updateInfo) {
    try {
      const searchingOrder = await Order.findOne({ orderIndex: orderIndex });

      if (!searchingOrder) {
        throw new Error("주문 정보가 없습니다. 주문을 먼저 진행해 주세요.");
      }

      if (searchingOrder.shippingStatus === "배송중") {
        throw new Error("이미 배송이 시작되어 주문 수정이 불가능합니다.");
      }
      //-------------배송시작 전 상품 추가기능 삭제------------//
      // searchingOrder.productList.push(...updateInfo.productList);
      // searchingOrder.priceList.push(...updateInfo.priceList);
      // searchingOrder.totalPrice = searchingOrder.priceList.reduce(
      // (a, b) => a + b
      // );
      //----------------------------------------------------//
      searchingOrder.shippingAddress = updateInfo.shippingAddress;
      searchingOrder.shippingRequest = updateInfo.shippingRequest;
      searchingOrder.buyerEmail = updateInfo.buyerEmail;
      searchingOrder.buyerPhoneNumber = updateInfo.buyerPhoneNumber;
      searchingOrder.recipientName = updateInfo.recipientName;
      searchingOrder.recipientPhoneNumber = updateInfo.recipientPhoneNumber;

      const updatedOrderData = await searchingOrder.save();
      return updatedOrderData;
    } catch (err) {
      console.log(err);
      throw new Error("주문내용 수정 실패");
    }
  }

  // [Admin] 관리자가 특정 유저의 주문을 삭제하는 기능
  async deleteAll(orderIndex) {
    // admin 기능, 주문번호를 확인하여 해당 주문 삭제
    try {
      const orderToCancel = await Order.findOne({ orderIndex: orderIndex });
      if (!orderToCancel) {
        throw new Error("주문 정보가 없습니다.");
      }
      await Order.deleteOne({ orderIndex: orderIndex });
    } catch (err) {
      console.log(err);
      throw new Error("주문 정보 삭제 실패");
    }
  }
  // 유저가 자신의 주문을 취소하는 기능
  async cancelOrder(orderIndex) {
    try {
      // 본인의 주문을 주문번호로 검색하여 배송 전 취소하기.
      const orderToCancel = await Order.findOne({ orderIndex: orderIndex });
      if (!orderToCancel) {
        throw new Error("주문 정보가 없습니다.");
      }
      // 배송중인 상품은 취소 불가능하다.
      if (orderToCancel.shippingStatus === "배송중") {
        throw new Error("배송 중인 주문을 취소가 불가능합니다.");
      }
      // 배송 시작 전이라면 취소가 가능하다.
      await Order.deleteOne({ orderIndex: orderIndex });
    } catch (err) {
      console.log(err);
      throw new Error("주문 취소 실패");
    }
  }
  async changeStatus(orderIndex, status) {
    try {
      // 해당 주문정보를 찾고, 주문정보가 없는지 체크한다.
      const orderToChangeStatus = await Order.findOne({
        orderIndex: orderIndex,
      });
      if (!orderToChangeStatus) {
        throw new Error("주문 정보가 없습니다.");
      }
      orderToChangeStatus.shippingStatus = status;
      const updatedStatus = orderToChangeStatus.save();
      return updatedStatus;
    } catch (err) {
      console.log(err);
      throw new Error("배송 상태 변경 실패");
    }
  }
  // -----------------server test fuction-----------------//
}

const orderModel = new OrderModel(); // exports 이름 변경
// module.exports = orderModel; // OrderModel을 exports
export { orderModel };
// ---- Database 수동 추가용 툴 ---- //
// const orderInfo = {
//   _id: new ObjectId(),
//   __v: 0,
//   buyerId: "sfsfsf",
//   buyer: "1",
//   buyerEmail: "giveme@gmail.com",
//   buyerPhoneNumber: "010-1234-5678",
//   recipientName: "쟤한테주세요",
//   recipientPhoneNumber: "010-1234-5678",
//   shippingAddress: "제주도",
//   shippingRequest: "빨리 주세용",
//   shippingStatus: "배송 준비중",
//   productList: ["레드와인1"],
//   priceList: [30000],
//   totalPrice: 30000,
//   orderIndex: null,
// };
// orderModel.createOrder(orderInfo); // 추가 구현완료
// orderModel.deleteAll("추가삭제테스트"); // 삭제 구현완료
// orderModel.cancelOrder("주문취소테스트1");
// orderModel.cancelOrder("주문취소테스트2");
// orderModel.changeStatus("주문변경테스트", "배송안할건데?");
// ------------------------------//
