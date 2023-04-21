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

//상품 정보 (이름, 영어이름, 브랜드, 종류, 나라, 지역, 가격, 이미지URL, 정보, 태그, 특성)
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nameEng: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    type: {
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
    price: {
      type: Number,
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
  }
);

export { ProductSchema, FeatureSchema };
