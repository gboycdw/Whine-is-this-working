import mongoose from "mongoose";
import OrderSchema from "../schemas/order-schema.js";
import { nanoid } from "nanoid"; // npm install nanoid 로 라이브러리 설치해야 함
import dayjs from "dayjs"; // npm install dayjs 로 라이브러리 설치해야 함

const Order = mongoose.model("orders", OrderSchema);

class OrderModel {
  // 주문자 id(email)로 해당 유저의 주문내역을 검색하는 기능
  async findById(userId) {
    return await Order.find({ buyerEmail: userId }).lean();
  }

  // [Admin] 모든 유저의 주문내역을 조회하는 기능
  async findAllOrders() {
    return await Order.find({}).lean();
  }

  // 유저가 새 주문을 생성하는 기능.
  async createOrder(orderInfo) {
    try {
      const newOrder = await Order.create(orderInfo);
      //----------------주문합계를 생성하는 부분---------------//
      newOrder.totalPrice = newOrder.priceList.reduce((a, b) => a + b);
      //----------------고유한 주문번호를 생성하는 부분---------------//
      newOrder.orderIndex = dayjs().format("YYYYMMDD") + nanoid(6);
      //---------생성한 주문번호를 저장---------//
      const newOrderList = await newOrder.save();
      return newOrderList;
    } catch (err) {
      console.log(err);
      throw new Error("주문 생성 실패");
    }
  }

  // 유저가 기존 주문관련 정보를 수정하는 기능
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
      //----------------하단의 코드 router로 이동 권장--------------------//
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

  // [Admin] 관리자가 주문번호로 기존 주문내역을 삭제하는 기능
  async deleteAll(orderIndex) {
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

  // 유저가 주문번호로 자신의 주문을 취소하는 기능
  async cancelOrder(orderIndex) {
    try {
      const orderToCancel = await Order.findOne({ orderIndex: orderIndex });
      if (!orderToCancel) {
        throw new Error("주문 정보가 없습니다.");
      }
      // 유저 인터페이스에서는, 배송중인 상품의 취소가 불가능하다.
      if (orderToCancel.shippingStatus === "배송중") {
        throw new Error("배송 중인 주문을 취소가 불가능합니다.");
      }
      await Order.deleteOne({ orderIndex: orderIndex });
    } catch (err) {
      console.log(err);
      throw new Error("주문 취소 실패");
    }
  }

  // [Admin] 관리자가 주문번호로 기존 주문내역의 배송상태를 변경하는 기능
  async changeStatus(orderIndex, status) {
    try {
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
}

const orderModel = new OrderModel();
export { orderModel };
