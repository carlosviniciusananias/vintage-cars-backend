"use strict";
var express = require("express");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var path = require("path");
var routes = require("./routes/routes");
var app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);
app.listen(3003, function () {
    console.log("server started");
});
