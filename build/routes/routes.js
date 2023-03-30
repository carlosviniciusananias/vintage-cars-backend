"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = require("../controllers/UserController");
var express = require("express");
var routes = express.Router();
routes.get("/", function (req, res) {
    res.json({
        message: "welcome to vintage cars backend",
    });
});
routes.get("/users", UserController.index);
routes.post("/users", UserController.userCreate);
module.exports = routes;
