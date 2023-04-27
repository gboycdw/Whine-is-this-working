import { model } from "mongoose";
import { CategorySchema } from "../schemas/category-schema.js";

const Category = model("Category", CategorySchema);

export class CategoryModel {
  //카테고리 조회
  async find() {
    const categories = await Category.find({});
    if (categories.length < 1) {
      throw new Error("[카테고리 조회 실패] 카테고리가 존재하지 않습니다.");
    }
    return categories;
  }

  //카테고리 이름으로 조회
  async findByTitle(title) {
    const category = await Category.findOne({ title: title });
    if (!category || category.length < 1) {
      throw new Error(
        "[카테고리 조회 실패] 해당 이름을 가지는 카테고리가 존재하지 않습니다."
      );
    }
    return category;
  }

  //카테고리 추가
  async createCategory(categoryInfo) {
    try {
      const newCategory = await Category.create(categoryInfo);
      return newCategory;
    } catch (err) {
      throw new Error("[카테고리 추가 실패] 입력 양식을 확인해주세요.");
    }
  }

  //카테고리 수정
  async updateCategory(id, categoryInfo, option) {
    try {
      const updateCategory = await Category.updateOne(id, categoryInfo, option);
      return updateCategory;
    } catch (err) {
      throw new Error("[카테고리 수정 실패] 입력 양식을 확인해주세요.");
    }
  }

  //카테고리 삭제
  async deleteCategory(id) {
    try {
      const deleteCategory = await Category.deleteOne({ _id: id });
      return deleteCategory;
    } catch (err) {
      throw new Error(
        "[카테고리 삭제 실패] 해당 id를 가지는 카테고리가 존재하지 않습니다."
      );
    }
  }
}

const categoryModel = new CategoryModel();

export { categoryModel };
