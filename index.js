const express = require("express");
const app = express();
const passwords = require("./passwords.js");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("../public/index.ejs");
});

app.get("/api", (req, res) => res.send("<a href='/api/password'>/api/password</a>"));

app.get("/api/password", (req, res) => {
    if(req.query.length) {
        if(parseInt(req.query.length) != NaN) {
            if(parseInt(req.query.length) <= 100000) {
                res.status(200).send({
                    password: passwords.password(parseInt(req.query.length)),
                    timestamp: Date.now()
                });
            } else {
                res.status(400).send({
                    error: "Password Length is too large, The Limit is 100000."
                });
            }
        } else {
            res.status(400).send({
                error: "The length provided was not a number."
            });
        }
    } else {         
        res.status(200).send({
            password: passwords.password(50),
            timestamp: Date.now()
        });
    }
});

console.log("[!] Starting Server.");

const server = app.listen(1945, () => {
    console.table({
        "status": "Started",
        "port": server.address().port,
        "test": passwords.password(50),
        "test2": passwords.password(25),
        "test3": passwords.password(30)
    });
});