import express from "express";
import { userRouter } from "./routers/user-routers.js";
import { orderRouter } from "./routers/order-routers.js";
import { productRouter } from "./routers/product-routers.js";
import { viewsRouter } from "./routers/view-routers.js";
import { categoryRouter } from "./routers/category-routers.js";

const app = express();

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

// 라우터 등록
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/", viewsRouter);
app.use(viewsRouter);

export { app };
