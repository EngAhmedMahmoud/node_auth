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
    jwt.sign({ user }, "secretkeyHere", { expiresIn: "30s" }, (err, token) => {
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
//limit the access
app.post("/posts", verifyAccess, (req, res) => {
    jwt.verify(req.token, "secretkeyHere", (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.status(200).json({
                msg: "Hi you have the access to web api",
                data: authData
            });
        }
    });
});

//verifyAccess
function verifyAccess(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    console.log(bearerHeader);
    if (typeof (bearerHeader) !== "undefined") {
        //get token from header
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        //calling the next request
        next();
    } else {
        res.sendStatus(403);
    }
}
//running the server
app.listen(PORT, () => {
    console.log(`Server started: http://${HOST}:${PORT}`);
});
