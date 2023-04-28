import { productModel } from "../db/index.js";

class ProductService {
  constructor(productModel) {
    this.productModel = productModel;
  }

  //상품 조회
  async getProducts() {
    try {
      const products = await productModel.find();
      return products;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //상품 ID로 조회
  async getProductById(id) {
    try {
      const product = await productModel.findById(id);
      return product;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //상품 이름으로 조회
  async getProductByName(name) {
    try {
      const product = await productModel.findByName(name);
      return product;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //상품 종류별로 조회
  async getProductsByType(type) {
    try {
      const product = await productModel.findByType(type);
      return product;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //상품 나라별로 조회
  async getProductsByCountry(country) {
    try {
      const product = await productModel.findByCountry(country);
      return product;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //상품 가격별로 조회
  async getProductsByPrice(lowerPrice, higherPrice) {
    try {
      const products = await productModel.findByPrice(lowerPrice, higherPrice);
      return products;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //Pick 상품 조회
  async getPickedProducts() {
    try {
      const products = await productModel.findByPicked();
      return products;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //Best 상품 조회
  async getBestProducts() {
    try {
      const products = await productModel.findByBest();
      return products;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
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
