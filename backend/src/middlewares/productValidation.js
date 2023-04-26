import { ProductJoi } from "../validators/index.js";

export async function productValidation(req, res, next) {
  const body = req.body;
  try {
    await ProductJoi.validateAsync(body);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ code: 400, message: err.message });
  }

  next();
}
