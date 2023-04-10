"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes/routes"));
var database_1 = __importDefault(require("./database/database"));
var cors = require("cors");
var cookieParser = require("cookie-parser");
var app = (0, express_1.default)();
app.use(cors());
app.use(cookieParser());
app.use(express_1.default.json());
app.use(routes_1.default);
(0, database_1.default)();
app.listen(3003, function () {
    console.log("server started");
});
