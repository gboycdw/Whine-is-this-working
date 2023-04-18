const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  //----------------주문 리스트----------------//
  productList: [
    // 구매할 상품 리스트
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
  ],
  priceList: [
    // 구매할 상품의 가격 리스트
    {
      type: Number,
      required: true,
    },
  ],
  totalPrice: {
    // 구매할 상품의 총 가격
    type: Number,
    required: true,
  },
  //----------------주문자 정보----------------//
  buyer: {
    // 주문자 이름
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User", // 참조할 모델 명
  },
  buyerEmail: {
    // 주문자 이메일
    type: String,
    required: true,
  },
  buyerPhoneNumber: {
    // 주문자 연락처
    type: String,
    required: true,
  },
  //----------------수령자 정보----------------//
  recipientName: {
    // 받는 사람 이름
    type: String,
    required: true,
  },
  recipientPhoneNumber: {
    // 받는 사람 전화번호
    type: String,
    required: true,
  },
  //----------------배송 정보----------------//
  shippingAddress: {
    // 배송 주소
    type: String,
    required: true,
  },
  shippingExtreAddress: {
    // 배송 추가 주소 - 미리 작성함
    type: String,
    required: false,
  },
  shippingPostalCode: {
    // 배송지 우편번호
    type: String,
    required: true,
  },
  shippingRequest: {
    // 배송 요청사항 - 필수는 아님.
    type: String,
    required: false,
  },
});

module.export = OrderSchema;
