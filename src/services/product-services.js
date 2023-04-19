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

  async getProduct() {
    const products = await productModel.find();
    return products;
  }
}

const productService = new ProductService(productModel);

export { productService };
