const { orderRouter } = require("./routers/order-router");
const { viewsRouter } = require("./routers/view-router");
const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", orderRouter);
app.use("/", viewsRouter);

// app.use(viewsRouter);

module.exports = app;
