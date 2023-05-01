import { CategoryJoiSchema } from "../validators/index.js";

class CategoryJoi {
  async createCategoryJoi(req, res, next) {
    const body = req.body;
    try {
      await CategoryJoiSchema.createCategory.validateAsync(body);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ code: 400, message: err.message });
    }
    next();
  }

  async updateCategoryJoi(req, res, next) {
    const body = req.body;
    try {
      await CategoryJoiSchema.updateCategory.validateAsync(body);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ code: 400, message: err.message });
    }
    next();
  }
}

const categoryChecker = new CategoryJoi();
export { categoryChecker };
