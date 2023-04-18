const app = require("./src/app.js");
const db = require("./src/db");
const port = 8080;

app.listen(port, () => {
  console.log("listening on 8080");
});
