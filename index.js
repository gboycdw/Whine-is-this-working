import 'dotenv/config'
import { app } from './src/app.js';
const PORT = process.env.PORT || 5000;

function handle() {
  console.log(`Server Connected, http://localhost:${PORT}`);
}

app.listen(PORT, handle);