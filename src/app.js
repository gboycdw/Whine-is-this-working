import express from "express";
import { userRouter } from "./routers/user-router.js";
const app = express();

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());

// Content-Type: application/x-www-form-urlencoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.urlencoded({ extended: false }));

// 유저 라우터 등록
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export { app };
