const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const database = require("./database/database")
const routes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

database();

app.listen(3003, function () {
  console.log("server started");
});
