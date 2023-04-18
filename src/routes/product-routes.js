const { Router } = require("express");
const Product = require("../db/schemas/product-schema");
const ProductModel = require("../db/models/product-models");

const ProductRouter = Router();

//상품 전체 조회
ProductRouter.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//상품 개별 조회
ProductRouter.get("/:name", async (req, res) => {});

//상품 추가
ProductRouter.post("/", async (req, res) => {});

//상품 수정
ProductRouter.post("/:name", async (req, res) => {});

//상품 삭제
ProductRouter.delete("/:name", async (req, res) => {});

module.exports = ProductRouter;
