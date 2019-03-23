"use strict";
require("dotenv/config");
const express = require("express");
const jwt = require("jsonwebtoken");
const PORT = process.env.SERVER_PORT || 3000;
const HOST = process.env.SERVER_IP || "http://localhost";

//create express application
const app = express();

//create api requests
app.get("/", (req, res) => {
    res.status(200).json({
        msg: "Welcome to jwt authentication application"
    });
});
//running the server
app.listen(PORT, () => {
    console.log(`Server started:${HOST}:${PORT}`);
});
