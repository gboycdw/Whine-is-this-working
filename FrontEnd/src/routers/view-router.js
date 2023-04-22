// const { Router } = require("express");
import { Router } from "express";

// const path = require("path");

const viewsRouter = Router();
viewsRouter.get("/", (req, res) => {
  res.send("main page");
  console.log("메인 페이지 접속");
});

// module.exports = { viewsRouter };
export { viewsRouter };
