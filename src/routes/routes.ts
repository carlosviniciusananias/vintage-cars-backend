import { Router } from "express";
const UserController = require("../controllers/UserController");

const express = require("express");
const routes: Router = express.Router();

routes.get("/", function (req, res) {
  res.json({
    message: "welcome to vintage cars backend",
  });
});

routes.get("/users", UserController.index);
routes.post("/users", UserController.userCreate);

module.exports = routes;
