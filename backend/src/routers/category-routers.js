import { Router } from "express";
import { categoryService } from "../services/index.js";

const categoryRouter = Router();
//카테고리 전체 조회
categoryRouter.get("/", async (req, res, next) => {
  try {
    const categories = await categoryService.getCategories();
    res.status(201).json(categories);
  } catch (err) {
    next(err);
  }
});

//카테고리 이름별 조회
categoryRouter.get("/:title", async (req, res, next) => {
  try {
    const c_title = req.params.title;
    const categories = await categoryService.getCategoryByTitle(c_title);
    res.status(201).json(categories);
  } catch (err) {
    next(err);
  }
});

//카테고리 추가
categoryRouter.post("/", async (req, res, next) => {
  try {
    const { title, categories } = req.body;
    const newCategory = await categoryService.createCategory({
      title,
      categories,
    });

    res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
});

//카테고리 수정
categoryRouter.put("/:id", async (req, res, next) => {
  try {
    const update_id = req.params.id;
    const title = req.body.title;
    const lists = req.body.categories;

    const updateCategory = await categoryService.updateCategory(update_id, {
      title,
      categories: lists,
    });

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
