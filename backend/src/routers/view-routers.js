import { Router } from "express";

const viewsRouter = Router();
viewsRouter.get("/", (req, res) => {
  res.send("root page");
  console.log(
    "메인 페이지 입니다. 현재 백엔드 서버가 정상적으로 작동하고 있습니다."
  );
});

export { viewsRouter };
