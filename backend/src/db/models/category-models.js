import { model } from "mongoose";
import { CategorySchema } from "../schemas/category-schema.js";

const Category = model("Category", CategorySchema);

export class CategoryModel {
  //카테고리 조회
  async find() {
    try {
      const categories = await Category.find({});
      return categories;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //카테고리 이름으로 조회
  async findByTitle(title) {
    try {
      const category = await Category.findOne({ title: title });
      return category;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //카테고리 추가
  async createCategory(categoryInfo) {
    try {
      const newCategory = await Category.create(categoryInfo);
      return newCategory;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //카테고리 수정
  async updateCategory(id, categoryInfo, option) {
    try {
      const updateCategory = await Category.updateOne(id, categoryInfo, option);
      return updateCategory;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }

  //카테고리 삭제
  async deleteCategory(id) {
    try {
      const deleteCategory = await Category.deleteOne({ _id: id });
      return deleteCategory;
    } catch (err) {
      console.log(`❌ ${err}`);
    }
  }
}

const categoryModel = new CategoryModel();

export { categoryModel };
