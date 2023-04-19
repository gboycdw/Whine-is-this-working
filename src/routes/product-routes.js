import { Router } from "express";
import { productService } from "../services/index.js";

const productRouter = Router();

//상품 전체 조회
productRouter.get("/", async (req, res, next) => {
  try {
    const products = await productService.getProduct();
    res.status(201).json(products);
  } catch (err) {
    next(err);
  }
});

// //상품 개별 조회
// router.get("/:name", async (req, res) => {});

//상품 추가
productRouter.post("/register", async (req, res, next) => {
  try {
    const name = req.body.name;
    const price = req.body.price;
    const type = req.body.type;
    const country = req.body.country;
    const alcohol = req.body.alcohol;
    const image = req.body.image;

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

// //상품 수정
// router.post("/:name", async (req, res) => {});

// //상품 삭제
// router.delete("/:name", async (req, res) => {});

export { productRouter };
