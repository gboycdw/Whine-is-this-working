import { Product } from "../schemas/product-schema.js";

export class ProductModel {
  async find() {
    const products = await Product.find({});
    return products;
  }

  //와인 ID로 상세 정보 조회
  async findById(id) {
    const product = await Product.findOne({ _id: id });
    return product;
  }

  //와인 이름으로 상세 정보 조회
  async findByName(search_name) {
    const product = await Product.findOne({ name: search_name });
    return product;
  }

  //와인 타입별로 조회(ex. 레드, 화이트, 스파클링, etc..)
  async findByType(type) {
    const products = await Product.find({ type: type });
    return products;
  }

  //와인 나라별로 조회
  async findByCountry(country) {
    const products = await Product.find({ country: country });
    return products;
  }

  //와인 가격별로 조회
  async findByPrice(lowerPrice, higherPrice) {
    const products = await Product.find({
      $and: [{ price: { $gte: lowerPrice } }, { price: { $lt: higherPrice } }],
    });
    return products;
  }

  //Pick 와인 조회
  async findByPicked() {
    const products = await Product.find({ isPicked: true });
    return products;
  }

  //Best 와인 조회
  async findByBest() {
    const products = await Product.find({ isBest: true });
    return products;
  }

  //와인 추가하기
  async createProduct(productInfo) {
    const newProduct = await Product.create(productInfo);
    return newProduct;
  }

  //와인 정보 수정
  async updateProduct(id, productInfo) {
    const updateProduct = await Product.findOneAndUpdate(
      { _id: id },
      productInfo,
      { returnOriginal: false }
    );
    return updateProduct;
  }

  //와인 삭제
  async deleteProduct(id) {
    const deleteProduct = await Product.deleteOne({ _id: id });
    return deleteProduct;
  }
}

const productModel = new ProductModel();

export { productModel };
