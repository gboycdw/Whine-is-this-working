const mongoose = require("mongoose");
class dbAddress {
  constructor() {
    const cloudDB = "";
    const localDB =
      "mongodb+srv://gboycdw:278650@testserver.rgoyy7y.mongodb.net/test";
    this.server = localDB;
    this.serverName = localDB.split("//")[1].split(":")[0];
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
