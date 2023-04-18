const { Router } = require("express");
const Product = require("../db/models");

const ProductRouter = Router();

//상품 전체 조회
ProductRouter.get("/", async (req, res) => {});

//상품 개별 조회
ProductRouter.get("/:name", async (req, res) => {});

//상품 추가
ProductRouter.put("/", async (req, res) => {});

//상품 수정
ProductRouter.post("/:name", async (req, res) => {});

//상품 삭제
ProductRouter.delete("/:name", async (req, res) => {});
