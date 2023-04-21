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
productRouter.get("/:id", async (req, res, next) => {
  try {
    const search_id = req.params.id;
    const product = await productService.getProductById(search_id);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});

//상품 추가
productRouter.post("/", async (req, res, next) => {
  try {
    const {
      name,
      nameEng,
      brand,
      type,
      country,
      area,
      price,
      imgUrl,
      info,
      inventory,
      tags,
      features,
    } = req.body;

    const newProduct = await productService.createProduct({
      name,
      nameEng,
      brand,
      type,
      country,
      area,
      price,
      imgUrl,
      info,
      inventory,
      tags,
      features,
    });

    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
});

//상품 수정
productRouter.patch("/:id", async (req, res, next) => {
  try {
    const update_id = req.params.id;
    const name = req.body.name;
    const nameEng = req.body.nameEng;
    const brand = req.body.brand;
    const type = req.body.type;
    const country = req.body.country;
    const area = req.body.area;
    const price = req.body.price;
    const imgUrl = req.body.imgUrl;
    const info = req.body.info;
    const inventory = req.body.inventory;
    const tags = req.body.tags;
    const features = req.body.features;

    const updateProduct = await productService.updateProduct(update_id, {
      name,
      nameEng,
      brand,
      type,
      country,
      area,
      price,
      imgUrl,
      info,
      inventory,
      tags: tags,
      features: features,
    });

    res.status(201).json(updateProduct);
  } catch (err) {
    next(err);
  }
});

//상품 삭제
productRouter.delete("/:id", async (req, res, next) => {
  try {
    const delete_id = req.params.id;
    const result = await productService.deleteProduct(delete_id);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

export { productRouter };
