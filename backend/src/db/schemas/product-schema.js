import mongoose, { Schema } from "mongoose";

//상품 정보 (이름, 브랜드, 색상, 나라, 지역, 이미지 주소, 정보, 가격, 할인가격, 판매수량, 판매상태, 선택상품, 최고상품, 재고량, 태그, 특성)
const ProductSchema = new Schema(
  {
    seq: {
      type: Number,
      default: 0,
      set: (value) => {
        if(isNaN(value)) {
          return 0;
        }
        return value;
      }
    },
    name: {
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
    region: {
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
      default: 0,
    },
    saleState: {
      type: String,
      required: true,
      default: "판매중",
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
    features: {
      sugar: {
        type: String,
        required: true,
        default: "s1",
      },
      acidity: {
        type: String,
        required: true,
        default: "a1",
      },
      tannic: {
        type: String,
        required: true,
        default: "t1",
      },
      body: {
        type: String,
        required: true,
        default: "b1",
      },
      alcoholDegree: {
        type: Number,
        required: true,
        default: 15,
      },
    },
  },
  {
    timestamps: true,
    collection: "products",
  }
);

ProductSchema.pre("save", function (next) {
  const product = this;
  if (!product.seq) {
    Product.countDocuments().then((count) => {
      product.seq = count + 1;
      next();
    });
  } else {
    next();
  }
});

const Product = mongoose.model("Product", ProductSchema);

export { Product };
