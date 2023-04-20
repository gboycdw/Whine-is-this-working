// const mongoose = require("mongoose");
import mongoose from "mongoose";
// require("dotenv").config();
import "dotenv/config";
// import db
class dbAddress {
  constructor() {
    const cloudDB = "";
    const localDB = process.env.DB_URL;
    this.server = localDB;
    this.serverName = process.env.DB_OWNER;
  }
}
const address = new dbAddress();
mongoose.connect(address.server);
const db = mongoose.connection;
db.on("connected", () =>
  console.log("Connected MongoDB Server : " + address.serverName)
);
db.on("error", (error) =>
  console.error("\nFailure Connecting MongoDB Server ToT\n" + "\n" + error)
);

export * from "./models/order-models.js";
