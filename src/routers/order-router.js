const { Router } = require("express");
const { orderService } = require("../services/order-service");
const orderRouter = Router();

//------------server test module---------------//
// const dbdata = orderService.gogomao();
// console.log(dbdata);

// const orderInfo = {
//   _id: new ObjectId(),
//   __v: 0,
//   buyer: "나도살래요",
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

// const dummydata = {
//   buyer: "고마오",
//   buyerEmail: "gomao@gomao.com",
//   buyerPhoneNumber: "010-0000-1111",
//   productList: ["gomao", "cutehane"],
// };

// orderRouter.get("/order", (req, res) => {
//   console.log("주문 페이지 접속");
//   res.send("order page");
// });
//-----------------유저 이름으로 주문내역 검색하기-----------------//
orderRouter.get("/order/server/:userName", async (req, res) => {
  const userName = req.params.userName;
  try {
    const dbdata = await orderService.findUserOrder(userName);
    // const dbdata = req.body;
    res.json(dbdata);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server Error");
  }
});
//-------------[관리자] 모든 유저의 주문내역 검색하기-------------//
orderRouter.get("/order/admin/server", async (req, res) => {
  try {
    const dbdata = await orderService.findAllOrdersByAdmin();
    // const dbdata = req.body;
    const print = [];
    for (let i = 0; i < dbdata.length; i++) {
      print.push(dbdata[i]);
    }
    let cul = print;
    res.json(cul);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server Error");
  }
});
//-------------------------------------------------------//

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
