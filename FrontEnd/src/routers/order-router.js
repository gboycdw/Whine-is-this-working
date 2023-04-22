// const { Router } = require("express");
import { Router } from "express";
// const { orderService } = require("../services/order-service");
import { orderService } from "../services/index.js";
const orderRouter = Router();

//-----------------유저 이름으로 주문내역 검색하기-----------------//
orderRouter.get("/user/:username", async (req, res) => {
  try {
    const userEmail = req.params.username;
    console.log(userEmail, " 의 주문내역을 조회 중...");
    const dbdata = await orderService.findUserOrder(userEmail);
    // const dbdata = req.body;
    res.json(dbdata);
    console.log(userEmail, " 의 주문내역 출력 완료.");
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .send("Internal server Error!! 해당 유저의 주문내역이 없습니다.");
    console.log("해당 유저의 주문내역이 없습니다!!");
  }
});
//-------------[Admin] 모든 유저의 주문내역 검색하기-------------//
orderRouter.get("/admin", async (req, res) => {
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
    // console.log(err);
    res.status(500).send("Internal server Error!! 입력된 주문내역이 없습니다.");
  }
});
//-----------------유저가 새로운 주문 추가하기-----------------//
orderRouter.post("/add", async (req, res, next) => {
  console.log("새로운 주문내역을 만드는 중...");
  const orderInfo = req.body;
  console.log(orderInfo);
  try {
    const dbdata = await orderService.createNewOrder(orderInfo);
    console.log("주문 완료. 감사합니다.");
    res.json(dbdata);
  } catch (err) {
    next(err);
    // res.status(500).send("Internal server Error!! 주문 실패!!");
    console.log("알 수 없는 오류로 주문이 실패하였습니다!!!!");
  }
});
//-----------------유저 주문정보 수정하기-----------------//
orderRouter.put("/user/:orderindex/change", async (req, res, next) => {
  const orderIndex = req.params.orderindex;
  console.log("주문번호 ", orderIndex, "의 주문정보를 수정하는 중...");
  try {
    const updateInfo = req.body;
    const dbdata = await orderService.changeUsersOrder(orderIndex, updateInfo);
    res.json(dbdata);
    console.log("주문번호 ", orderIndex, "의 주문정보 수정 완료.");
  } catch (err) {
    next(err);
    console.log("해당 유저의 주문내역이 없거나, 배송이 시작되었습니다.");
  }
});
//-----------------[Admin] 유저 주문 삭제하기 -----------------//
// 나중에 delete로 수정
orderRouter.delete("/admin/delete/:orderindex", async (req, res) => {
  try {
    const orderIndex = req.params.orderindex;
    console.log("주문번호 ", orderIndex, " 의 주문내역을 삭제하는 중...");
    await orderService.deleteOrderByAdmin(orderIndex);
    // const dbdata = req.body;
    res.send("주문내역 삭제 완료");
    console.log("주문번호 ", orderIndex, " 의 주문내역 삭제 완료.");
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .send(
        "Internal server Error!! 해당 유저의 주문내역이 없거나, 배송이 시작되었습니다."
      );
    console.log("해당 유저의 주문내역이 없거나, 배송이 시작되었습니다.");
  }
});
//-----------------유저가 본인의 주문 취소하기 -----------------//
// 나중에 delete로 수정
orderRouter.delete("/user/delete/:orderindex", async (req, res) => {
  try {
    const orderIndex = req.params.orderindex;
    console.log("주문번호 ", orderIndex, " 의 주문을 취소하는 중...");
    const dbdata = await orderService.deleteOrderByUser(orderIndex);
    // const dbdata = req.body;
    res.send("주문 취소 완료");
    console.log("주문번호 ", orderIndex, " 의 주문 취소 완료.");
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .send(
        "Internal server Error!! 해당 주문내역이 없거나, 배송이 시작되었습니다."
      );
    console.log("해당 주문내역이 없거나, 배송이 시작되었습니다.");
  }
});
//-----------------[Admin] 배송 상태 변경하기 -----------------//
// 나중에 put으로 수정
orderRouter.put("/admin/:orderindex/:changestatus", async (req, res) => {
  try {
    // 현재는 무조건 배송중으로 바꾸게 되어 있음
    // 배송 정보 수정요청을 어느 경로로 받을 지 결정하면 추가하면 됨.
    const orderIndex = req.params.orderindex;
    const status = req.params.changestatus;
    console.log("주문번호 ", orderIndex, " 의 배송정보를 수정하는 중...");
    const dbdata = await orderService.changeStatusByAdmin(orderIndex, status); // 여기 수정해야함. 주소로 받거나, 다른 방법으로 받을 수 있음.
    // const dbdata = req.body;
    res.json(dbdata);
    console.log("주문번호 ", orderIndex, " 의 배송정보 변경 완료.");
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .send("Internal server Error!! 해당 유저의 주문내역이 없습니다.");
    console.log("해당 유저의 주문내역이 없습니다!!");
  }
});

// module.exports = { orderRouter };
export { orderRouter };

// ------ Database 추가(수정)용 툴 ----- // 전부 get으로 수정하고 사용
// const orderInfo = {
//   buyer: "주문추가3",
//   buyerEmail: "changetest@gmail.com",
//   buyerPhoneNumber: "010-1111-1111",
//   recipientName: "쟤말고저한테주세요",
//   recipientPhoneNumber: "010-0000-0000",
//   shippingAddress: "제주도",
//   shippingRequest: "빨리 주세용",
//   shippingStatus: "배송 준비중",
//   productList: ["레드와인99"],
//   priceList: [100000],
//   totalPrice: 100000,
//   orderIndex: 0,
// };
// const updateInfo = {
//   buyerEmail: "aaaaaaaaaaaaaaaaaaaaaaaaatest@gmail.com",
//   buyerPhoneNumber: "010-2222-1111",
//   recipientName: "나한테 주세요",
//   recipientPhoneNumber: "010-0000-0000",
//   shippingAddress: "명왕성으로주세욬ㅋㅋㅋㅋㅋㅋ",
//   shippingRequest: "아무때나~~~~~주세요~~~~~~~",
// };

//---------------작동확인용 더미데이터-----------------//
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
// orderRouter.get("/order/add", async (req, res) => {
//   try {
//     const { buyer, buyerEmail, buyerPhoneNumber, productList } = dummydata;
//     const showText = `구매자 이름 : ${buyer}<br>구매자 메일 : ${buyerEmail}<br>구매자 연락처 : ${buyerPhoneNumber}<br>구매 항목 : ${productList}`;
//     res.send(showText);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Internal server Error");
//   }
// });
