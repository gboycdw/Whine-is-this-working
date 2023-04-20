// const mongoose = require("mongoose");
import { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    //----------------주문 리스트----------------//
    productList: [
      // 구매할 상품 리스트
      {
        type: String,
        required: true,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Product", // 주문 당시의 history를 저장하여야 함.
      },
    ],

    priceList: [
      // 구매할 상품의 가격 리스트
      {
        type: Number,
        required: true,
        // select: true,
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
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      required: true,
      // select: true,
      // ref: "User", // 참조할 모델 명 --> 주문자이름을 변경할 수 있는 사이트도 있음.
    },
    // buyerId: {
    //   // 주문자 Id
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    //   // id는 변경할 수 없는 값이므로 유저데이터 참조하는 것이 의미가 있음.
    // },
    buyerEmail: {
      // 주문자 이메일
      type: String,
      required: true,
      // select: true,
    },
    buyerPhoneNumber: {
      // 주문자 연락처
      type: String,
      required: true,
      // select: true,
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
    // shippingExtreAddress: {
    //   // 배송 추가 주소 - 미리 작성함
    //   type: String,
    //   required: false,
    // },
    shippingPostalCode: {
      // 배송지 우편번호
      type: String,
      // required: true,
    },
    shippingRequest: {
      // 배송 요청사항 - 필수는 아님.
      type: String,
      required: false,
    },
    shippingStatus: {
      // 주문 상태 : 배송중 / 배송전
      type: String,
      require: true,
    },
  },
  {
    // 타임스탬프와 DB에서 사용할 컬렉션 이름 설정
    timestamps: true,
    collection: "orders",
  }
);

// module.exports = OrderSchema;
export default OrderSchema;
