import { Router } from "express";

const viewsRouter = Router();
viewsRouter.get("/", (req, res) => {
  res.send("main page");
  console.log("메인 페이지 접속");
});

export { viewsRouter };
