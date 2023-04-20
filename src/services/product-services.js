import { productModel } from "../db/index.js";

class ProductService {
  constructor(productModel) {
    this.productModel = productModel;
  }

  async createProduct(productInfo) {
    const { name, price, type, country, alcohol, image } = productInfo;

    const newInfo = {
      name,
      price,
      type,
      country,
      alcohol,
      image,
    };

    const newProduct = await productModel.productCreate(newInfo);
    return newProduct;
  }

  async getProducts() {
    const products = await productModel.findAll();
    return products;
  }

  async getProductByName(name) {
    const product = await productModel.findByName(name);
    return product;
  }

  async getProductsByType(type) {
    const product = await productModel.findByType(type);
    return product;
  }

  async getProductsByCountry(country) {
    const product = await productModel.findByCountry(country);
    return product;
  }
  async deleteProduct(name) {
    const product = await productModel.productDelete(name);
    return product;
  }

  async updateProduct(name, updateInfo) {
    const product = await productModel.productUpdate(name, updateInfo);
    return product;
  }
}

const productService = new ProductService(productModel);

export { productService };
