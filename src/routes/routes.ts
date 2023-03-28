import { Router } from "express";

const express = require("express");
const routes: Router = express.Router();

routes.get("/", function (req, res) {
  res.json({
    message: "welcome to vintage cars backend",
  });
});

module.exports = routes;
