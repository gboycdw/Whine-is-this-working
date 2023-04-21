import express from "express";
import { userRouter } from "./routers/user-router.js";
import { orderRouter } from "./routers/order-router.js";
import { productRouter } from "./routes/product-router.js";
import { viewsRouter } from "./routers/view-router.js";
const app = express();

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

// 라우터 등록
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);
app.use("/", viewsRouter);
app.use(viewsRouter);

export { app };
