const express = require("express");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "CLAVE ULTRA SECRETA";
const path = require('path');
const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "user_information",
    connectionLimit: 5,
});

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
