const app = require("./src/app");
const PORT = 8080;

function handle() {
  console.log(`Server Connected, Port : ${PORT}`);
}

app.listen(PORT, handle);