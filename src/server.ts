import express from "express";
import Routes from "./routes/routes";
import Database from "./database/database";

const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(Routes);

Database();

app.listen(3003, function () {
  console.log("server started");
});
