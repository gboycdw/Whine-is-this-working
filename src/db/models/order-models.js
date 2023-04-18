const mongoose = require("mongoose");
const OrderSchema = require("../schemas/order-schema");

const Order = mongoose.model("orders", OrderSchema);

class OrderModel {
  async findById(orderId) {
    const order = await Order.findOne({ id: orderId });
    return order;
  }
  async gomao() {
    const gogo = await Order.find({});
    // console.log(gogo);

    return gogo;
  }
}

const orderModel = new OrderModel(); // exports 이름 변경

orderModel.gomao();
orderModel.gomao().then((result) => {
  const data = result;
  console.log(Object.values(data[1])[2].buyer);
});
orderModel.gomao().then((result) => {
  const data = result;
  console.log(Object.keys(data[0]));
});
orderModel.gomao().then((result) => {
  const data = result;
  console.log(data[0]);
});

module.exports = orderModel; // OrderModel을 exports
