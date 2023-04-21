// const app = require("./src/app.js");
import "dotenv/config";
import app from "./src/app.js";

const port = 8080;

app.listen(port, () => {
  console.log("listening on 8080");
});
