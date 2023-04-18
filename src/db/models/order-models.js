const mongoose = require("mongoose");
const OrderSchema = require("../schemas/order-schema");

const Order = mongoose.model("orders", OrderSchema);

class OrderModel {
  async findById(buyerId) {
    // 주문자 id를 받아 주문한 모든 상품을 찾음.
    // 사용자용? 관리자용? 둘다 사용 가능하긴 함.
    const order = await Order.findOne({ _id: buyerId });
    return order;
  }
  async createOrder(orderInfo) {
    // orderInfo는 배열 혹은 객체 형태로 예상되고,
    // user정보와 주문한 product정보들을 저장함
    try {
      const newOrder = await Order.create(orderInfo);
      return newOrder;
    } catch (err) {
      console.log(err);
      throw new Error("주문 생성 실패");
    }
  }
  async changeOrder(buyerId, updateInfo) {
    // 아이디를 바탕으로 기존에 저장된 주문 내용을 찾고
    // updateInfo를 해당 데이터베이스에 추가 해줘야 한다.
    try {
      const orderToUpdate = await Order.findOne({ _id: buyerId });
      // 기존 주문내역이 없는 경우 error 반환
      if (!orderToUpdate) {
        throw new Error("주문 정보가 없습니다. 주문을 먼저 진행해 주세요.");
      }
      // 배송이 시작된 경우 주문 추가가 불가능함.
      if (orderToUpdate.status === "배송중") {
        throw new Error("이미 배송이 시작되어 주문 수정이 불가능합니다.");
      }
      // 배송 전이고, 주문내역이 있다면 주문상품 내역을 업데이트한다.
      orderToUpdate.productList.push(...updateInfo.productList);
      orderToUpdate.priceList.push(...updateInfo.priceList);
      // 이 부분을 적절히 수정하여 추가 외에도 삭제 기능도 구현 가능?
      orderToUpdate.totalPrice += updateInfo.price;
      orderToUpdate.shippingAddress = updateInfo.shippingAddress;
      // 추가한 상품을 포함한 데이터를 돌려받는다.
      const updatedOrder = await orderToUpdate.save();
      return updatedOrder;
    } catch (err) {
      console.log(err);
      throw new Error("주문 추가 실패");
    }
  }
  async deleteAll(buyerId) {
    // admin 기능, 유저 아이디를 검색하여 해당 유저의 주문내역을 전부 삭제
    try {
      await Order.deleteMany({ id: buyerId });
    } catch (err) {
      console.log(err);
      throw new Error("주문 정보 삭제 실패");
    }
  }
  async cancelOrder(buyerId) {
    // user 기능, 유저 아이디를 기반으로 본인의 주문내역을 확인하고 삭제
    // 배송 전 주문 수정 기능은 위의 changeOrder 활용
    try {
      // 해당 아이디의 주문정보를 찾고, 주문정보가 없는지 체크한다.
      const orderToCancel = await Order.findOne({ id: buyerId });
      if (!orderToCancel) {
        throw new Error("주문 정보가 없습니다.");
      }
      // 배송중인 상품은 취소 불가능하다.
      if (orderToCancel.status === "배송중") {
        throw new Error("배송 중인 주문을 취소가 불가능합니다.");
      }
      // 배송 시작 전이라면 취소가 가능하다.
      Order.deleteOne({ id: buyerId });
    } catch (err) {
      console.log(err);
      throw new Error("주문 취소 실패");
    }
  }
  async changeStatus(buyerId, status) {
    try {
      // 해당 아이디의 주문정보를 찾고, 주문정보가 없는지 체크한다.
      const orderToChangeStatus = await Order.findOne({ id: buyerId });
      if (!orderToChangeStatus) {
        throw new Error("주문 정보가 없습니다.");
      }
      // 배송완료시 DB에서 제거하는 것을 고려했으나,
      // 환불 등을 고려하여 그대로 남겨 두는 것이 좋을 것 같음.
      orderToChangeStatus.status = status;
      const updatedStatus = orderToChangeStatus.save();
      return updatedStatus;
    } catch (err) {
      console.log(err);
      throw new Error("배송 상태 변경 실패");
    }
  }
  //-----------------server test fuction-----------------//
  // async gomao() {
  //   const gogo = await Order.find({});
  //   console.log(gogo);

  //   return gogo;
  // }
}

const orderModel = new OrderModel(); // exports 이름 변경
//-----------------server test module-----------------//
// orderModel.gomao();
// orderModel.gomao().then((result) => {
//   const data = result;
//   console.log(Object.values(data[1])[2].buyer);
// });
// orderModel.gomao().then((result) => {
//   const data = result;
//   console.log(Object.keys(data[0]));
// });
// orderModel.gomao().then((result) => {
//   const data = result;
//   console.log(data[0]);
// });

module.exports = orderModel; // OrderModel을 exports
