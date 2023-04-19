import { Router } from "express";
import { productService } from "../services/index.js";

const productRouter = Router();

//상품 전체 조회
productRouter.get("/", async (req, res, next) => {
  try {
    const products = await productService.getProducts();
    res.status(201).json(products);
  } catch (err) {
    next(err);
  }
});

//상품 개별 조회
productRouter.get("/:name", async (req, res, next) => {
  try {
    const search_name = req.params.name;
    const product = await productService.getProduct(search_name);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});

//상품 추가
productRouter.post("/", async (req, res, next) => {
  try {
    const { name, price, type, country, alcohol, image } = req.body;

    const newProduct = await productService.createProduct({
      name,
      price,
      type,
      country,
      alcohol,
      image,
    });

    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
});

//상품 수정
productRouter.put("/:name", async (req, res, next) => {
  try {
    const update_name = req.params.name;
    const name = req.query.name;
    const price = req.query.price;
    const type = req.query.type;
    const country = req.query.country;
    const alcohol = req.query.alcohol;
    const image = req.query.image;

    const updateProduct = await productService.updateProduct(update_name, {
      name,
      price,
      type,
      country,
      alcohol,
      image,
    });

    res.status(201).json(updateProduct);
  } catch (err) {
    next(err);
  }
});

//상품 삭제
productRouter.delete("/:name", async (req, res, next) => {
  try {
    const deleteName = req.params.name;
    const result = await productService.deleteProduct(deleteName);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

export { productRouter };
