const { Router } = require("express");
const { Product } = require("../db");

const router = Router();

//상품 전체 조회
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// //상품 개별 조회
// router.get("/:name", async (req, res) => {});

// //상품 추가
// router.post("/", async (req, res) => {});

// //상품 수정
// router.post("/:name", async (req, res) => {});

// //상품 삭제
// router.delete("/:name", async (req, res) => {});

module.exports = router;
