import 'dotenv/config'
import { app } from './src/app.js';
const PORT = 8080;

function handle() {
  console.log(`Server Connected, http://localhost:${PORT}`);
}

app.listen(PORT, handle);