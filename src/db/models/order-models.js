const mongoose = require("mongoose");
const OrderSchema = require("../schemas/order-schema");
const ObjectId = mongoose.Types.ObjectId;
const Order = mongoose.model("orders", OrderSchema);

class OrderModel {
  // 이름으로 사용자의 주문내역을 검색하는 기능.
  async findById(userId) {
    const findUserOrder = await Order.findOne({ buyer: userId });
    const usersOrder = await findUserOrder.save();
    return usersOrder["_doc"];
  }
  // [Admin] 모든 사용자의 주문내역을 조회하는 기능.
  async findAllOrders() {
    const allOrders = await Order.find({}).lean();
    return allOrders;
  }
  // 새 주문을 생성하는 기능.
  // 나중에 회원기능과 연계하여 없는 회원이거나, 없는 상품 주문에 대한 예외처리 추가로 고민해야함.
  async createOrder(orderInfo) {
    try {
      const newOrder = await Order.create(orderInfo);
      // console.log(newOrder);
      const newOrderList = await newOrder.save();
      return newOrderList;
    } catch (err) {
      console.log(err);
      throw new Error("주문 생성 실패");
    }
  }
  // 기존 주문을 변경하는 기능.
  async changeOrder(userId, updateInfo) {
    try {
      const searchingOrder = await Order.findOne({ buyer: userId });

      if (!searchingOrder) {
        throw new Error("주문 정보가 없습니다. 주문을 먼저 진행해 주세요.");
      }

      if (searchingOrder.shippingStatus === "배송중") {
        throw new Error("이미 배송이 시작되어 주문 수정이 불가능합니다.");
      }

      searchingOrder.productList.push(...updateInfo.productList);
      searchingOrder.priceList.push(...updateInfo.priceList);
      searchingOrder.totalPrice = searchingOrder.priceList.reduce(
        (a, b) => a + b
      );
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
      throw new Error("주문 추가 실패");
    }
  }

  // [Admin] 관리자가 특정 유저의 주문을 삭제하는 기능
  async deleteAll(userName) {
    // admin 기능, 유저 아이디를 검색하여 해당 유저의 주문내역을 전부 삭제
    try {
      const orderToCancel = await Order.findOne({ buyer: userName });
      if (!orderToCancel) {
        throw new Error("주문 정보가 없습니다.");
      }
      await Order.deleteOne({ buyer: userName });
    } catch (err) {
      console.log(err);
      throw new Error("주문 정보 삭제 실패");
    }
  }
  // 유저가 자신의 주문을 취소하는 기능
  async cancelOrder(userName) {
    // user 기능, 유저 아이디를 기반으로 본인의 주문내역을 확인하고 삭제
    // 배송 전 주문 수정 기능은 위의 changeOrder 활용
    try {
      // 해당 아이디의 주문정보를 찾고, 주문정보가 없는지 체크한다.
      const orderToCancel = await Order.findOne({ buyer: userName });
      if (!orderToCancel) {
        throw new Error("주문 정보가 없습니다.");
      }
      // 배송중인 상품은 취소 불가능하다.
      if (orderToCancel.shippingStatus === "배송중") {
        throw new Error("배송 중인 주문을 취소가 불가능합니다.");
      }
      // 배송 시작 전이라면 취소가 가능하다.
      await Order.deleteOne({ buyer: userName });
    } catch (err) {
      console.log(err);
      throw new Error("주문 취소 실패");
    }
  }
  async changeStatus(userName, status) {
    try {
      // 해당 아이디의 주문정보를 찾고, 주문정보가 없는지 체크한다.
      const orderToChangeStatus = await Order.findOne({ buyer: userName });
      if (!orderToChangeStatus) {
        throw new Error("주문 정보가 없습니다.");
      }
      // 배송완료시 DB에서 제거하는 것을 고려했으나,
      // 환불 등을 고려하여 그대로 남겨 두는 것이 좋을 것 같음.
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

// ---- Database 수동 추가용 툴 ---- //
// const orderInfo = {
//   _id: new ObjectId(),
//   __v: 0,
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
// };
// orderModel.createOrder(orderInfo); // 추가 구현완료
// orderModel.deleteAll("추가삭제테스트"); // 삭제 구현완료
// orderModel.cancelOrder("주문취소테스트1");
// orderModel.cancelOrder("주문취소테스트2");
// orderModel.changeStatus("주문변경테스트", "배송안할건데?");
// ------------------------------//

module.exports = orderModel; // OrderModel을 exports
