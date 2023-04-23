import { categoryModel } from "../db/index.js";

class CategoryService {
  constructor(categoryModel) {
    this.categoryModel = categoryModel;
  }
  //카테고리 전체 조회
  async getCategories() {
    const categories = await categoryModel.find();
    return categories;
  }
  
  //카테고리 이름으로 조회
  async getCategoryByName(name) {
    const category = await categoryModel.findByName(name);
    return category;
  }

  //카테고리 추가
  async createCategory(categoryInfo) {
    const { name, lists } = categoryInfo;
    const newInfo = { name, lists };
    const newCategory = await categoryModel.createCategory(newInfo);
    return newCategory;
  }

  //카테고리 수정
  async updateCategory(id, updateInfo) {
    const category = await categoryModel.updateCategory(id, updateInfo);
    return category;
  }

  //카테고리 삭제
  async deleteCategory(id) {
    const category = await categoryModel.deleteCategory(id);
    return category;
  }
}

const categoryService = new CategoryService(categoryModel);

export { categoryService };
