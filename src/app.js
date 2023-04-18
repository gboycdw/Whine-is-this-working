const express = require("express");
const mongoose = require("mongoose");

const productRouter = require("./routes/product-routes");

mongoose.connect("mongodb://127.0.0.1:27017/testWhine");

mongoose.connection.on('connected', () => {
  console.log("MongoDB connected");
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("root page");
})

app.use("/product", productRouter);

module.exports = app;