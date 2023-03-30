"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
function database() {
    try {
        mongoose_1.default.connect(process.env.BASE_URL || "");
        console.log("Database connect with success");
    }
    catch (error) {
        console.error("Database connect error", error);
    }
}
module.exports = database;
