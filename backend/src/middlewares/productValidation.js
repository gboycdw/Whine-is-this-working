import { ProductJoiSchema } from "../validators/index.js";

class ProductJoi {
  async createProductJoi(req, res, next) {
    const body = req.body;
    try {
      await ProductJoiSchema.createProduct.validateAsync(body);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ code: 400, message: err.message });
    }
    next();
  }

  async updateProductJoi(req, res, next) {
    const body = req.body;
    try {
      await ProductJoiSchema.updateProduct.validateAsync(body);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ code: 400, message: err.message });
    }
    next();
  }

  async updateSaleStateJoi(req, res, next) {
    const body = req.body;
    try {
      await ProductJoiSchema.updateSaleState.validateAsync(body);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ code: 400, message: err.message });
    }
    next();
  }
}

const productChecker = new ProductJoi();
export { productChecker };
