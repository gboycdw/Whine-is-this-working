// const { Router } = require("express");
import { Router } from "express";
// const { orderService } = require("../services/order-service");
import { orderService } from "../services/index.js";
const orderRouter = Router();

//------------server test module---------------//

//-----------------유저 이름으로 주문내역 검색하기-----------------//
orderRouter.get("/order/user/:username", async (req, res) => {
  try {
    const userName = req.params.username;
    console.log(userName, " 의 주문내역을 조회 중...");
    const dbdata = await orderService.findUserOrder(userName);
    // const dbdata = req.body;
    res.json(dbdata);
    console.log(userName, " 의 주문내역 출력 완료.");
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .send("Internal server Error!! 해당 유저의 주문내역이 없습니다.");
    console.log("해당 유저의 주문내역이 없습니다!!");
  }
});
//-------------[Admin] 모든 유저의 주문내역 검색하기-------------//
orderRouter.get("/order/admin", async (req, res) => {
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
//현재 orderInfo를 받아올 루트가 없으므로 수동으로 정의해줌
//나중에 post로 수정
orderRouter.get("/order/add", async (req, res) => {
  try {
    const orderInfo = {
      buyer: "주문추가3",
      buyerEmail: "changetest@gmail.com",
      buyerPhoneNumber: "010-1111-1111",
      recipientName: "쟤말고저한테주세요",
      recipientPhoneNumber: "010-0000-0000",
      shippingAddress: "제주도",
      shippingRequest: "빨리 주세용",
      shippingStatus: "배송 준비중",
      productList: ["레드와인99"],
      priceList: [100000],
      totalPrice: 100000,
    };
    // console.log(orderInfo);
    // 현재는 수동으로 데이터를 주입해야 함.
    const dbdata = await orderService.createNewOrder(orderInfo);
    console.log("새로운 주문내역을 만드는 중...");
    // const dbdata = req.body;
    console.log("주문 완료. 감사합니다.");
    res.json(dbdata);
  } catch (err) {
    // console.log(err);
    res.status(500).send("Internal server Error!! 주문 실패!!");
    console.log("알 수 없는 오류로 주문이 실패하였습니다!!!!");
  }
});
//-----------------유저 이름, 주문 수정하기-----------------//
//현재 updateInfo를 받아올 루트가 없으므로 수동으로 정의해줌
// 나중에 put으로 수정
orderRouter.get("/order/user/:username/change", async (req, res) => {
  try {
    const updateInfo = {
      buyer: "제주문변경할게요", // 선언은 하지만 값은 변경되지 않음.
      buyerEmail: "changetest@gmail.com",
      buyerPhoneNumber: "010-2222-1111",
      recipientName: "나한테 주세요",
      recipientPhoneNumber: "010-0000-0000",
      shippingAddress: "뉴욕",
      shippingRequest: "아무때나~~~~~주세요~~~~~~~",
      shippingStatus: "배송 준비중",
      productList: ["레드와인100"],
      priceList: [1000000],
      totalPrice: 1000000,
    };
    const userName = req.params.username;
    console.log(userName, " 의 주문내역을 추가하는 중...");
    const dbdata = await orderService.changeUsersOrder(userName, updateInfo);
    // const dbdata = req.body;
    res.json(dbdata);
    console.log(userName, " 의 주문내역 추가 완료.");
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
//-----------------[Admin] 유저 주문 삭제하기 -----------------//
// 나중에 delete로 수정
orderRouter.get("/order/admin/delete/:username", async (req, res) => {
  try {
    const userName = req.params.username;
    console.log(userName, " 의 주문내역을 삭제하는 중...");
    const dbdata = await orderService.deleteOrderByAdmin(userName);
    // const dbdata = req.body;
    res.send("주문내역 삭제 완료");
    console.log(userName, " 의 주문내역 삭제 완료.");
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
orderRouter.get("/order/user/delete/:username", async (req, res) => {
  try {
    const userName = req.params.username;
    console.log(userName, " (나)의 주문을 취소하는 중...");
    const dbdata = await orderService.deleteOrderByUser(userName);
    // const dbdata = req.body;
    res.send("주문 취소 완료");
    console.log(userName, " (나)의 주문 취소 완료.");
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
//-----------------[Admin] 배송 상태 변경하기 -----------------//
// 나중에 put으로 수정
orderRouter.get("/order/admin/:username/:changestatus", async (req, res) => {
  try {
    // 현재는 무조건 배송중으로 바꾸게 되어 있음
    // 배송 정보 수정요청을 어느 경로로 받을 지 결정하면 추가하면 됨.
    const userName = req.params.username;
    const status = req.params.changestatus;
    console.log(userName, " 의 배송정보를 수정하는 중...");
    const dbdata = await orderService.changeStatusByAdmin(userName, status); // 여기 수정해야함. 주소로 받거나, 다른 방법으로 받을 수 있음.
    // const dbdata = req.body;
    res.json(dbdata);
    console.log(userName, " 의 배송정보 변경 완료.");
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

// ------ Database 추가(수정)용 툴 ----- // for changeUsersOrder //

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
