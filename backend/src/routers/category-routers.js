import { Router } from "express";
import { categoryService } from "../services/index.js";
import { categoryChecker } from "../middlewares/categoryValidation.js";

const categoryRouter = Router();

//카테고리 전체 조회
categoryRouter.get("/", async (req, res, next) => {
  try {
    console.log("🔎 모든 카테고리를 조회합니다...");
    const categories = await categoryService.getCategories();
    res.status(201).json(categories);
    console.log("✔️ 조회 완료!");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//카테고리 이름별 조회
categoryRouter.get("/:title", async (req, res, next) => {
  try {
    const c_title = req.params.title;
    console.log("🔎 카테고리 이름으로 카테고리를 조회합니다...");
    const categories = await categoryService.getCategoryByTitle(c_title);
    res.status(201).json(categories);
    console.log("✔️ 조회 완료!");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//카테고리 추가
categoryRouter.post("/", categoryChecker.createCategoryJoi, async (req, res, next) => {
  try {
    const { title, categories } = req.body;
    console.log("🔄 새로운 카테고리를 등록하는 중...");
    const newCategory = await categoryService.createCategory({
      title,
      categories,
    });

    res.status(201).json(newCategory);
    console.log("✔️ 카테고리 등록이 완료되었습니다!");
  } catch (err) {
    next(err);
  }
});

//카테고리 수정
categoryRouter.patch("/:id", categoryChecker.updateCategoryJoi, async (req, res, next) => {
  try {
    const update_id = req.params.id;
    //const title = req.body.title;
    const categories = req.body.categories;
    console.log("🔄 카테고리 정보를 수정합니다.");
    const updateCategory = await categoryService.updateCategory(
      { _id: update_id },
      {
        //title,
        categories: categories,
      },
      { returnOriginal: false }
    );

    res.status(201).json(updateCategory);
  } catch (err) {
    next(err);
  }
});

//카테고리 삭제
categoryRouter.delete("/:id", async (req, res, next) => {
  try {
    const delete_id = req.params.id;
    const result = await categoryService.deleteCategory(delete_id);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

export { categoryRouter };
