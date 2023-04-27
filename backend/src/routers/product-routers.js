import { Router } from "express";
import { productService } from "../services/index.js";
import { productChecker } from "../middlewares/productValidation.js";
// import { imageUploadHelper } from "../middlewares/multer.js";

const productRouter = Router();

//상품 전체 조회
productRouter.get("/", async (req, res, next) => {
  try {
    console.log("🔎 모든 상품을 조회합니다...");
    const products = await productService.getProducts();
    res.status(201).json(products);
    console.log("✔️ 조회 완료!");
  } catch (err) {
    console.log(`❌ ${err}`);
    next(err);
  }
});

//상품 개별 조회
productRouter.get("/:id", async (req, res, next) => {
  try {
    const search_id = req.params.id;
    console.log("🔎 상품 Id로 상품을 조회합니다...");
    const product = await productService.getProductById(search_id);
    res.status(201).json(product);
    console.log("✔️ 조회 완료!");
  } catch (err) {
    console.log(`❌ ${err}`);
    next(err);
  }
});

//와인 타입별로 조회
productRouter.get("/types/:type", async (req, res, next) => {
  try {
    const search_type = req.params.type;
    console.log("🔎 타입별 상품 조회 중...");
    const products = await productService.getProductsByType(search_type);
    res.status(201).json(products);
    console.log("✔️ 조회 완료!");
  } catch (err) {
    console.log(`❌ ${err}`);
    next(err);
  }
});

//와인 나라별로 조회
productRouter.get("/countries/:country", async (req, res, next) => {
  try {
    const search_country = req.params.country;
    console.log("🔎 국가별 상품 조회 중...");
    const products = await productService.getProductsByCountry(search_country);
    res.status(201).json(products);
    console.log("✔️ 조회 완료!");
  } catch (err) {
    console.log(`❌ ${err}`);
    next(err);
  }
});

//와인 가격별로 조회
productRouter.get("/prices/:min/:max", async (req, res, next) => {
  try {
    const lowerPrice = req.params.min;
    const higherPrice = req.params.max;
    console.log(
      `🔎 ${lowerPrice}원 이상 ${higherPrice}원 미만 상품 조회 중...`
    );
    const products = await productService.getProductsByPrice(
      lowerPrice,
      higherPrice
    );
    res.status(201).json(products);
    console.log("✔️ 조회 완료!");
  } catch (err) {
    console.log(`❌ ${err}`);
    next(err);
  }
});

//와인 Picked 상품 조회
productRouter.get("/lists/picked", async (req, res, next) => {
  try {
    console.log("🔎 Our Pick 상품 조회 중...");
    const products = await productService.getPickedProducts();
    res.status(201).json(products);
    console.log("✔️ 조회 완료!");
  } catch (err) {
    console.log(`❌ ${err}`);
    next(err);
  }
});

//와인 Best 상품 조회
productRouter.get("/lists/best", async (req, res, next) => {
  try {
    console.log("🔎 Monthly Best 상품 조회 중...");
    const products = await productService.getBestProducts();
    res.status(201).json(products);
    console.log("✔️ 조회 완료!");
  } catch (err) {
    console.log(`❌ ${err}`);
    next(err);
  }
});

//상품 추가
productRouter.post(
  "/",
  productChecker.createProductJoi,
  async (req, res, next) => {
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
      console.log("🔄 새로운 상품을 등록하는 중...");
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
      console.log("✔️ 상품 등록이 완료되었습니다!");
    } catch (err) {
      console.log(`❌ ${err}`);
      next(err);
    }
  }
);

//상품 수정
productRouter.put(
  "/:id",
  productChecker.updateProductJoi,
  async (req, res, next) => {
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
      console.log("🔄 상품 정보를 수정합니다.");
      const updateProduct = await productService.updateProduct(
        { _id: update_id },
        {
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
        },
        { returnOriginal: false }
      );

      res.status(201).json(updateProduct);
      console.log("✔️ 상품 정보가 수정되었습니다.");
    } catch (err) {
      console.log(`❌ ${err}`);
      next(err);
    }
  }
);

//상품 판매상태 수정
productRouter.patch(
  "/:id/:saleState",
  productChecker.updateSaleStateJoi,
  async (req, res, next) => {
    try {
      const update_id = req.params.id;
      const update_state = req.params.saleState;
      console.log("🔄 상품 판매상태를 수정합니다.");
      const updateProduct = await productService.updateProduct(update_id, {
        saleState: update_state,
      });
      res.status(201).json(updateProduct);
      console.log("✔️ 상품 판매상태 변경 완료.");
    } catch (err) {
      console.log(`❌ ${err}`);
      next(err);
    }
  }
);

//상품 삭제
productRouter.delete("/:id", async (req, res, next) => {
  try {
    const delete_id = req.params.id;
    console.log("🔄 등록된 상품을 삭제합니다.");
    const result = await productService.deleteProduct(delete_id);
    res.status(201).json(result);
    console.log("✔️ 상품 삭제 완료!");
  } catch (err) {
    console.log(`❌ ${err}`);
    next(err);
  }
});

export { productRouter };
