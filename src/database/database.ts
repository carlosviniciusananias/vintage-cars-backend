import mongoose from "mongoose";
require("dotenv").config();

const Database = () => {
  try {
    mongoose.connect(process.env.BASE_URL || "");

    console.log("Database connect with success");
  } catch (error) {
    console.error("Database connect error", error);
  }
};

export default Database;
