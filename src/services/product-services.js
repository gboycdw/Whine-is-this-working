import { productModel } from "../db/index.js";

class ProductService {
  constructor(productModel) {
    this.productModel = productModel;
  }

  //상품 생성
  async createProduct(productInfo) {
    const {
      name,
      nameEng,
      brand,
      type,
      country,
      area,
      price,
      imgUrl,
      info,
      inventory,
      tags,
      features,
    } = productInfo;

    const newInfo = {
      name,
      nameEng,
      brand,
      type,
      country,
      area,
      price,
      imgUrl,
      info,
      inventory,
      tags,
      features,
    };

    const newProduct = await productModel.createProduct(newInfo);
    return newProduct;
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

  //상품 수정
  async updateProduct(id, updateInfo) {
    const product = await productModel.updateProduct(id, updateInfo);
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
