import express from "express";
import cors from "cors";
import { userRouter } from "./routers/user-routers.js";
import { orderRouter } from "./routers/order-routers.js";
import { productRouter } from "./routers/product-routers.js";
import { viewsRouter } from "./routers/view-routers.js";
import { categoryRouter } from "./routers/category-routers.js";

const app = express();
app.use(cors());
// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

// 라우터 등록
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/", viewsRouter);
// app.use(viewsRouter);
// app.user(errorHandler) <-- 에러핸들러 추가 예정

export { app };
