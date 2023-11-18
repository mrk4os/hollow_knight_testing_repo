const express = require("express");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "CLAVE ULTRA SECRETA";
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
})

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
