const express = require("express");
const mongoose = require("mongoose");

//상품 라우터 추가
const productRouter = require("./src/routes/product-routes");

const app = express();
const PORT = 8080;

//MongoDB 연결
mongoose.connect("mongodb://localhost:27017/testWhine");

//JSON 데이터 제대로 파싱
app.use(express.json());
app.use(express.urlencoded( {extended: true}));

function handleListening() {
  console.log(`Server started! (http://localhost:${PORT})`);
}

function handleHome(req, res) {
  res.send("OK");
}

app.get("/", handleHome);

app.listen(PORT, handleListening);
