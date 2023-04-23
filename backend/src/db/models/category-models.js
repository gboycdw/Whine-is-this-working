import { model } from "mongoose";
import { CategorySchema } from "../schemas/category-schema.js";

const Category = model("Category", CategorySchema);

export class CategoryModel {
  //카테고리 조회
  async find() {
    const categories = await Category.find({});
    return categories;
  }

  //카테고리 이름으로 조회
  async findByName(name) {
    const category = await Category.findOne({ name: name });
    return category;
  }

  //카테고리 추가
  async createCategory(categoryInfo) {
    const newCategory = await Category.create(categoryInfo);
    return newCategory;
  }

  //카테고리 수정
  async updateCategory(id, categoryInfo) {
    const updateCategory = await Category.findOneAndUpdate(
      { _id: id },
      categoryInfo,
      { returnOriginal: false }
    );
    return updateCategory;
  }

  //카테고리 삭제
  async deleteCategory(id) {
    const deleteCategory = await Category.deleteOne({ _id: id });
    return deleteCategory;
  }
}

const categoryModel = new CategoryModel();

export { categoryModel };
