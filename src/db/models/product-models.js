const mongoose = require("mongoose");
const ProductSchema = require("../schemas/product-schema");

const Product = mongoose.model("Product", ProductSchema);

class ProductModel {
  // //와인 이름으로 상세 정보 조회
  // async findByName(name) {
  //   const product = await Product.findOne({ name });
  //   return product;
  // }

  // //와인 타입별로 조회(ex. 레드, 화이트, 스파클링, etc..)
  // async findByType(type) {
  //   const products = await Product.find({ type: type });
  //   return products;
  // }

  // //와인 추가하기
  // async productCreate(productInfo) {
  //   const newProduct = await Product.create(productInfo);
  //   return newProduct;
  // }

  // //와인 정보 수정
  // async productUpdate(name, productInfo) {
  //   const updateProduct = await Product.updateOne({ name: name }, productInfo);
  //   return updateProduct;
  // }

  // //와인 삭제
  // async productDelete(name) {
  //   const deleteProduct = await Product.deleteOne({ name });
  //   return deleteProduct;
  // }
}

const productModel = new ProductModel();

module.exports = productModel;