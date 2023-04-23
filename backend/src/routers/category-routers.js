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
categoryRouter.get("/:name", async (req, res, next) => {
  try {
    const c_name = req.params.name;
    const categories = await categoryService.getCategoryByName(c_name);
    res.status(201).json(categories);
  } catch (err) {
    next(err);
  }
});

//카테고리 추가
categoryRouter.post("/", async (req, res, next) => {
  try {
    const { name, lists } = req.body;
    const newCategory = await categoryService.createCategory({
      name,
      lists,
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
    const name = req.body.name;
    const lists = req.body.lists;

    const updateCategory = await categoryService.updateCategory(update_id, {
      name,
      lists: lists,
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
