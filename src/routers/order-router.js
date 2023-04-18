const { Router } = require("express");
const { orderService } = require("../services/order-service");
const orderRouter = Router();

const dummydata = {
  buyer: "고마오",
  buyerEmail: "gomao@gomao.com",
  buyerPhoneNumber: "010-0000-1111",
  productList: ["gomao", "cutehane"],
};

orderRouter.get("/order/add", (req, res) => {
  const { buyer, buyerEmail, buyerPhoneNumber, productList } = dummydata;
  const showText = `구매자 이름 : ${buyer}<br>구매자 메일 : ${buyerEmail}<br>구매자 연락처 : ${buyerPhoneNumber}<br>구매 항목 : ${productList}`;
  res.send(showText);
});

module.exports = { orderRouter };
