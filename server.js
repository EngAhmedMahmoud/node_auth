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
//create token for user
app.post("/login", (req, res) => {
    let user = {
        id: 12,
        name: "Ahmed Mahmoud",
        email: "ahmed.m.web.dev@gmail.com",
    };
    jwt.sign({ user }, "secretkeyHere", (err, token) => {
        if (err) {
            res.status(500).json({
                error: err
            });
        } else {
            res.status(200).json({
                token: token
            });
        }
    });
});

//running the server
app.listen(PORT, () => {
    console.log(`Server started: http://${HOST}:${PORT}`);
});
