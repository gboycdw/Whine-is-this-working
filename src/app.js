// const { orderRouter } = require("./routers/order-router");
import { orderRouter } from "./routers/order-router.js";
// const { viewsRouter } = require("./routers/view-router");
import { viewsRouter } from "./routers/view-router.js";
// const express = require("express");
import express from "express";
// import db from ".db";
const app = express();
// const db = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/order", orderRouter);

app.use("/", viewsRouter);
app.use(viewsRouter);

// module.exports = app;
export default app;
