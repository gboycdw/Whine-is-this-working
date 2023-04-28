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

  //와인 이름으로 상세 정보 조회 ===> 미사용 기능..?
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
    try {
      const newProduct = await Product.create(productInfo);
      return newProduct;
    } catch (err) {
      throw new Error("[상품 추가 실패] 상품 정보를 다시 확인해 주세요.");
    }
  }

  //와인 정보 수정
  async updateProduct(id, productInfo, option) {
    try {
      const updateProduct = await Product.findOneAndUpdate(
        id,
        productInfo,
        option
      );
      return updateProduct;
    } catch (err) {
      throw new Error("[상품 정보수정 실패] 입력 내용을 다시 확인해 주세요.");
    }
  }

  //와인 삭제
  async deleteProduct(id) {
    try {
      const deleteProduct = await Product.deleteOne({ _id: id });
      return deleteProduct;
    } catch (err) {
      throw new Error(
        "[상품 삭제 실패] 해당 id를 가지는 상품이 존재하지 않습니다."
      );
    }
  }
}

const productModel = new ProductModel();

export { productModel };
