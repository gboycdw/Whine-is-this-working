import { Router } from "express";
import { productService } from "../services/index.js";
import { productValidation } from "../middlewares/productValidation.js";

const productRouter = Router();

//상품 전체 조회
productRouter.get("/", async (req, res, next) => {
  try {
    const products = await productService.getProducts();
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
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
    console.log(err);
    next(err);
  }
});

//와인 타입별로 조회
productRouter.get("/types/:type", async (req, res, next) => {
  try {
    const search_type = req.params.type;
    const products = await productService.getProductsByType(search_type);
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//와인 나라별로 조회
productRouter.get("/countries/:country", async (req, res, next) => {
  try {
    const search_country = req.params.country;
    const products = await productService.getProductsByCountry(search_country);
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//와인 가격별로 조회
productRouter.get("/prices/:min/:max", async (req, res, next) => {
  try {
    const lowerPrice = req.params.min;
    const higherPrice = req.params.max;
    const products = await productService.getProductsByPrice(
      lowerPrice,
      higherPrice
    );
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//와인 Picked 상품 조회
productRouter.get("/lists/picked", async (req, res, next) => {
  try {
    const products = await productService.getPickedProducts();
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//와인 Best 상품 조회
productRouter.get("/lists/best", async (req, res, next) => {
  try {
    const products = await productService.getBestProducts();
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//상품 추가
productRouter.post("/", productValidation, async (req, res, next) => {
  try {
    const {
      seq,
      name,
      brand,
      region,
      type,
      country,
      info,
      inventory,
      imgUrl,
      price,
      discountPrice,
      saleCount,
      saleState,
      isPicked,
      isBest,
      tags,
      features,
    } = req.body;

    const newProduct = await productService.createProduct({
      seq,
      name,
      brand,
      region,
      type,
      country,
      info,
      inventory,
      imgUrl,
      price,
      discountPrice,
      saleCount,
      saleState,
      isPicked,
      isBest,
      tags,
      features,
    });

    res.status(201).json(newProduct);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//상품 수정
productRouter.put("/:id", async (req, res, next) => {
  try {
    const update_id = req.params.id;
    const {
      seq,
      name,
      brand,
      region,
      type,
      country,
      info,
      inventory,
      imgUrl,
      price,
      discountPrice,
      saleCount,
      saleState,
      isPicked,
      isBest,
      tags,
      features,
    } = req.body;

    const updateProduct = await productService.updateProduct(update_id, {
      seq,
      name,
      brand,
      region,
      type,
      country,
      info,
      inventory,
      imgUrl,
      price,
      discountPrice,
      saleCount,
      saleState,
      isPicked,
      isBest,
      tags: tags,
      features: features,
    });

    res.status(201).json(updateProduct);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//상품 판매상태 수정
productRouter.patch("/:id/:saleState", async (req, res, next) => {
  try {
    const update_id = req.params.id;
    const update_state = req.params.saleState;

    const updateProduct = await productService.updateProduct(update_id, {
      saleState: update_state,
    });
    res.status(201).json(updateProduct);
  } catch (err) {
    console.log(err);
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
    console.log(err);
    next(err);
  }
});

export { productRouter };
