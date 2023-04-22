import { Router } from "express";
import { orderService } from "../services/index.js";
const orderRouter = Router();

//-----------------userId로 주문내역 검색하기-----------------//
orderRouter.get("/user/:userId", async (req, res) => {
  try {
    const userEmail = req.params.userId;
    console.log(userEmail, " 의 주문내역을 조회 중...");
    const dbdata = await orderService.findUserOrder(userEmail);
    res.json(dbdata);
    console.log(userEmail, " 의 주문내역 출력 완료.");
  } catch (err) {
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
    const allOrderdDatas = [];
    for (let i = 0; i < dbdata.length; i++) {
      allOrderdDatas.push(dbdata[i]);
    }
    res.json(allOrderdDatas);
  } catch (err) {
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
    console.log("알 수 없는 오류로 주문이 실패하였습니다!!!!");
  }
});
//-----------주문번호로 유저의 주문정보 수정하기--------------//
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
//-------------[Admin] 주문정보로 해당 주문 삭제하기 --------------//
orderRouter.delete("/admin/delete/:orderindex", async (req, res) => {
  try {
    const orderIndex = req.params.orderindex;
    console.log("주문번호 ", orderIndex, " 의 주문내역을 삭제하는 중...");
    await orderService.deleteOrderByAdmin(orderIndex);
    res.send("주문내역 삭제 완료");
    console.log("주문번호 ", orderIndex, " 의 주문내역 삭제 완료.");
  } catch (err) {
    res
      .status(500)
      .send(
        "Internal server Error!! 해당 유저의 주문내역이 없거나, 배송이 시작되었습니다."
      );
    console.log("해당 유저의 주문내역이 없거나, 배송이 시작되었습니다.");
  }
});
//-----------------유저가 주문정보로 본인의 주문 취소하기 -----------------//
orderRouter.delete("/user/delete/:orderindex", async (req, res) => {
  try {
    const orderIndex = req.params.orderindex;
    console.log("주문번호 ", orderIndex, " 의 주문을 취소하는 중...");
    await orderService.deleteOrderByUser(orderIndex);
    res.send("주문 취소 완료");
    console.log("주문번호 ", orderIndex, " 의 주문 취소 완료.");
  } catch (err) {
    res
      .status(500)
      .send(
        "Internal server Error!! 해당 주문내역이 없거나, 배송이 시작되었습니다."
      );
    console.log("해당 주문내역이 없거나, 배송이 시작되었습니다.");
  }
});
//------------[Admin] 주문정보로 배송 상태 변경하기 -------------//
orderRouter.put("/admin/:orderindex/:changestatus", async (req, res) => {
  try {
    const orderIndex = req.params.orderindex;
    const status = req.params.changestatus;
    console.log("주문번호 ", orderIndex, " 의 배송정보를 수정하는 중...");
    const dbdata = await orderService.changeStatusByAdmin(orderIndex, status);
    res.json(dbdata);
    console.log("주문번호 ", orderIndex, " 의 배송정보 변경 완료.");
  } catch (err) {
    res
      .status(500)
      .send("Internal server Error!! 해당 유저의 주문내역이 없습니다.");
    console.log("해당 유저의 주문내역이 없습니다!!");
  }
});

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
