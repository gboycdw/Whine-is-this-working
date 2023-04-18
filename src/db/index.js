const mongoose = require("mongoose"); // import? require?
const OrderSchema = require("./schemas/order-schema");

exports.Order = mongoose.model("Order", OrderSchema);

const localDB =
  "mongodb+srv://gboycdw:278650@testserver.rgoyy7y.mongodb.net/?retryWrites=true&w=majority";
// const cloudDB =
mongoose.connect(localDB);
const db = mongoose.connection;
db.on("connected", () =>
  console.log("Connected MongoDB Server Successfully" + localDB)
);
db.on("error", (error) =>
  console.error("\nMongoDB 연결에 실패하였습니다...\n" + DB_URL + "\n" + error)
);
