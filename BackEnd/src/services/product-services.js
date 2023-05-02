import { productModel } from "../db/index.js";

class ProductService {
  constructor(productModel) {
    this.productModel = productModel;
  }

  //상품 조회
  async getProducts() {
    const products = await productModel.find();
    return products;
  }

  //상품 ID로 조회
  async getProductById(id) {
    const product = await productModel.findById(id);
    return product;
  }

  //상품 이름으로 조회
  async getProductByName(name) {
    const product = await productModel.findByName(name);
    return product;
  }

  //상품 종류별로 조회
  async getProductsByType(type) {
    const product = await productModel.findByType(type);
    return product;
  }

  //상품 나라별로 조회
  async getProductsByCountry(country) {
    const product = await productModel.findByCountry(country);
    return product;
  }

  //상품 가격별로 조회
  async getProductsByPrice(lowerPrice, higherPrice) {
    const products = await productModel.findByPrice(lowerPrice, higherPrice);
    return products;
  }

  //Pick 상품 조회
  async getPickedProducts() {
    const products = await productModel.findByPicked();
    return products;
  }

  //Best 상품 조회
  async getBestProducts() {
    const products = await productModel.findByBest();
    return products;
  }

  //상품 생성
  async createProduct(productInfo) {
    const newProduct = await productModel.createProduct(productInfo);
    return newProduct;
  }

  //상품 수정
  async updateProduct(id, updateInfo, option) {
    const product = await productModel.updateProduct(id, updateInfo, option);
    return product;
  }

  //상품 삭제
  async deleteProduct(id) {
    const product = await productModel.deleteProduct(id);
    return product;
  }
}

const productService = new ProductService(productModel);

export { productService };
