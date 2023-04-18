const { Router } = require("express");
const { orderService } = require("../services/order-service");
const orderRouter = Router();

// const dbdata = orderService.gogomao();
// console.log(dbdata);

const dummydata = {
  buyer: "고마오",
  buyerEmail: "gomao@gomao.com",
  buyerPhoneNumber: "010-0000-1111",
  productList: ["gomao", "cutehane"],
};

orderRouter.get("/order", (req, res) => {
  console.log("주문 페이지 접속");
  res.send("order page");
});

orderRouter.get("/order/server", async (req, res) => {
  try {
    // const dbdata = await orderService.gogomao()
    const dbdata = req.body;
    const { buyer, buyerEmail, buyerPhoneNumber, productList } = dbdata;
    const showText = `구매자 이름 : ${buyer}<br>구매자 메일 : ${buyerEmail}<br>구매자 연락처 : ${buyerPhoneNumber}<br>구매 항목 : ${productList}`;
    return res.send(showText);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server Error");
  }
});

orderRouter.get("/order/add", async (req, res) => {
  try {
    const { buyer, buyerEmail, buyerPhoneNumber, productList } = dummydata;
    const showText = `구매자 이름 : ${buyer}<br>구매자 메일 : ${buyerEmail}<br>구매자 연락처 : ${buyerPhoneNumber}<br>구매 항목 : ${productList}`;
    res.send(showText);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server Error");
  }
});

module.exports = { orderRouter };
