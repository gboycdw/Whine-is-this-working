const express = require("express");
const app = express();
const PORT = 8080;

function handleListening() {
    console.log(`Server started! (http://localhost:${PORT})`);
}

function handleHome(req, res) {
    res.send("OK");
}

app.get('/', handleHome);
app.listen(PORT, handleListening);