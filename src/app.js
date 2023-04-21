import cors from "cors";
import express from "express";
import { productRouter } from "./routes/product-routes.js";

const app = express();

app.use(cors()); //CORS 에러 방지
app.use(express.json()); //JSON 데이터 인식 및 핸들링할 수 있게 해줌
app.use(express.urlencoded({ extended: false })); //urlencoded 형태 데이터 인식 및 핸들링

app.get("/", (req, res) => {
  return res.send("root page");
});

//product 라우팅
app.use("/product", productRouter);

export { app };
