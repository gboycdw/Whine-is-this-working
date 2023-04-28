import { categoryModel } from "../db/index.js";

class CategoryService {
  constructor(categoryModel) {
    this.categoryModel = categoryModel;
  }
  //카테고리 전체 조회
  async getCategories() {
    try {
      const categories = await categoryModel.find();
      return categories;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //카테고리 이름으로 조회
  async getCategoryByTitle(title) {
    try {
      const category = await categoryModel.findByTitle(title);
      return category;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //카테고리 추가
  async createCategory(categoryInfo) {
    try {
      const { title, categories } = categoryInfo;
      const newInfo = { title, categories };
      const newCategory = await categoryModel.createCategory(newInfo);
      return newCategory;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //카테고리 수정
  async updateCategory(id, updateInfo, option) {
    try {
      const category = await categoryModel.updateCategory(
        id,
        updateInfo,
        option
      );
      return category;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //카테고리 삭제
  async deleteCategory(id) {
    try {
      const category = await categoryModel.deleteCategory(id);
      return category;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }
}

const categoryService = new CategoryService(categoryModel);

export { categoryService };
