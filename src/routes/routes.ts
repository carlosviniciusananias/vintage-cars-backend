import express, { Router } from "express";

import CarController from "../controllers/CarController";
import UserController from "../controllers/UserController";
import EventController from "../controllers/EventController";

const routes: Router = express.Router();

routes.get("/", function (req, res) {
  res.json({
    message: "welcome to vintage cars backend",
  });
});

routes.get("/users", UserController.userList);
routes.post("/users", UserController.userCreate);

routes.get("/event", EventController.eventList);
routes.post("/event", EventController.eventCreate);

routes.get("/car", CarController.carList);
routes.post("/car", CarController.carCreate);

export default routes;
