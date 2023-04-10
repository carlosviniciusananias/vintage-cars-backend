"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    user_name: String,
    user_car: String,
    user_address: String,
    user_password: String,
});
var User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
