"use strict";
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    user_name: String,
    user_car: String,
    user_address: String,
    user_password: String,
});
module.exports = mongoose.model("User", UserSchema);
