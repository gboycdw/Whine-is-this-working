const express = require("express");
const mongoose = require("mongoose");

const productRouter = require("./routes/product-routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/product", productRouter);
app.get("/", (req, res) => {
  res.send("root page");
});

module.exports = app;
