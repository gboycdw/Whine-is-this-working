import { CategoryJoi } from "../validators/index.js";

export async function categoryValidation(req, res, next) {
  const body = req.body;
  try {
    await CategoryJoi.validateAsync(body);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ code: 400, message: err.message });
  }

  next();
}
