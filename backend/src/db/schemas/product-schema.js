import { Schema } from "mongoose";

//상품 특성
const FeatureSchema = new Schema({
  sugar: {
    type: String,
    requried: true,
  },
  acidity: {
    type: String,
    requried: true,
  },
  tannic: {
    type: String,
    requried: true,
  },
  body: {
    type: String,
    requried: true,
  },
  alcoholDegree: {
    type: Number,
    required: true,
  },
});

//상품 정보 (이름, 브랜드, 색상, 나라, 지역, 이미지 주소, 정보, 가격, 할인가격, 판매수량, 판매상태, 선택상품, 최고상품, 재고량, 태그, 특성)
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    saleCount: {
      type: Number,
      required: true,
    },
    saleState: {
      type: String,
      required: true,
    },
    isPicked: {
      type: Boolean,
      required: true,
      default: false,
    },
    isBest: {
      type: Boolean,
      required: true,
      default: false,
    },
    inventory: {
      type: Number,
      required: true,
      default: 0,
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    features: FeatureSchema,
  },
  {
    timestamps: true,
    collection: "products",
  }
);

export { ProductSchema, FeatureSchema };
