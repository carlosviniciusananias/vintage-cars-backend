import mongoose from "mongoose";
require("dotenv").config();

function database() {
  try {
    mongoose.connect(process.env.BASE_URL || "");

    console.log("Database connect with success");
  } catch (error) {
    console.error("Database connect error", error);
  }
}

module.exports = database;
