import { Router } from "express";
import { orderService } from "../services/index.js";
const orderRouter = Router();

//-----------------userId로 주문내역 검색하기-----------------//
orderRouter.get("/:userid", async (req, res) => {
  try {
    const userEmail = req.params.userid;
    console.log("🔎", userEmail, " 의 주문내역을 조회 중...");
    const dbdata = await orderService.findUserOrder(userEmail);
    res.json(dbdata);
    console.log("✔️ ", userEmail, " 의 주문내역 출력 완료.");
  } catch (err) {
    res
      .status(500)
      .send("Internal server Error!! 해당 유저의 주문내역이 없습니다.");
  }
});
//-------------[Admin] 모든 유저의 주문내역 검색하기-------------//
orderRouter.get("/", async (req, res) => {
  try {
    const dbdata = await orderService.findAllOrdersByAdmin();
    console.log("🔎 모든 유저의 주문정보를 조회합니다...");
    res.json(dbdata);
    console.log("✔️  주문정보 출력 완료!");
  } catch (err) {
    res.status(500).send("Internal server Error!! 입력된 주문내역이 없습니다.");
  }
});
//-----------------유저가 새로운 주문 추가하기-----------------//
orderRouter.post("/", async (req, res, next) => {
  console.log("🔄 새로운 주문내역을 만드는 중...");
  const orderInfo = req.body;
  console.log(orderInfo);
  try {
    const dbdata = await orderService.createNewOrder(orderInfo);
    console.log("✔️  주문 완료. 감사합니다.");
    res.json(dbdata);
  } catch (err) {
    next(err);
  }
});
//-----------주문번호로 유저의 주문정보 수정하기--------------//
orderRouter.put("/:number", async (req, res, next) => {
  const orderNumber = req.params.number;
  console.log("🔄 주문번호 ", orderNumber, "의 주문정보를 수정하는 중...");
  try {
    const updateInfo = req.body;
    const dbdata = await orderService.changeUsersOrder(orderNumber, updateInfo);
    res.json(dbdata);
    console.log("✔️  주문번호 ", orderNumber, "의 주문정보 수정 완료.");
  } catch (err) {
    next(err);
  }
});
//------------[Admin] 주문정보로 배송 상태 변경하기 -------------//
orderRouter.put("/:number/:status", async (req, res) => {
  try {
    const orderNumber = req.params.number;
    const status = req.params.status;
    console.log("🔄 주문번호 ", orderNumber, " 의 배송정보를 수정하는 중...");
    const dbdata = await orderService.changeStatusByAdmin(orderNumber, status);
    res.json(dbdata);
    console.log("✔️  주문번호 ", orderNumber, " 의 배송정보 변경 완료.");
  } catch (err) {
    res.status(500).send("Internal server Error!! 배송상태 변경 실패");
    console.log(err);
  }
});
//------------[Admin] 주문정보로 운송장번호 변경하기 -------------//
orderRouter.put("/:number/parcels/:waybill", async (req, res) => {
  try {
    const orderNumber = req.params.number;
    const wayBill = req.params.waybill;
    console.log("🔄 주문번호 ", orderNumber, " 의 운송장정보를 수정하는 중...");
    const dbdata = await orderService.changeWayBillByAdmin(
      orderNumber,
      wayBill
    );
    res.json(dbdata);
    console.log("✔️  주문번호 ", orderNumber, " 의 운송장번호 변경 완료.");
  } catch (err) {
    res.status(500).send("Internal server Error!! 운송장번호 변경 실패");
    console.log(err);
  }
});
//-------------[Admin] 주문정보로 해당 주문 삭제하기 --------------//
orderRouter.delete("/admin/:number", async (req, res) => {
  try {
    const orderNumber = req.params.number;
    console.log("🔄 주문번호 ", orderNumber, " 의 주문내역을 삭제하는 중...");
    await orderService.deleteOrderByAdmin(orderNumber);
    res.send("주문내역 삭제 완료");
    console.log("✔️  주문번호 ", orderNumber, " 의 주문내역 삭제 완료.");
  } catch (err) {
    res
      .status(500)
      .send(
        "Internal server Error!! 해당 유저의 주문내역이 없거나, 배송이 시작되었습니다."
      );
    console.log(err);
  }
});
//-----------------유저가 주문정보로 본인의 주문 취소하기 -----------------//
orderRouter.delete("/:number", async (req, res) => {
  try {
    const orderNumber = req.params.number;
    console.log("🔄 주문번호 ", orderNumber, " 의 주문을 취소하는 중...");
    await orderService.deleteOrderByUser(orderNumber);
    res.send("주문 취소 완료");
    console.log("✔️ 주문번호 ", orderNumber, " 의 주문 취소 완료.");
  } catch (err) {
    res
      .status(500)
      .send(
        "Internal server Error!! 해당 주문내역이 없거나, 배송이 시작되었습니다."
      );
    console.log(err);
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
