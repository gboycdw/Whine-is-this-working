const { orderRouter } = require("./routers/order-router");
const { viewsRouter } = require("./routers/view-router");
const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("main page");
  console.log("메인페이지 접속");
});
app.get("/order", (req, res) => {
  res.send("order page");
  console.log("주문 페이지 접속");
});

// app.use(viewsRouter);
app.use("/", orderRouter);

module.exports = app;
