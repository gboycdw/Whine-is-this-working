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
    const products = await productModel.find();
    return products;
  }

  async getProduct(name) {
    const product = await productModel.findByName(name);
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
