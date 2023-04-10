"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var CarController_1 = __importDefault(require("../controllers/CarController"));
var UserController_1 = __importDefault(require("../controllers/UserController"));
var EventController_1 = __importDefault(require("../controllers/EventController"));
var routes = express_1.default.Router();
routes.get("/", function (req, res) {
    res.json({
        message: "welcome to vintage cars backend",
    });
});
routes.get("/users", UserController_1.default.userList);
routes.post("/users", UserController_1.default.userCreate);
routes.get("/event", EventController_1.default.eventList);
routes.post("/event", EventController_1.default.eventCreate);
routes.get("/car", CarController_1.default.carList);
routes.post("/car", CarController_1.default.carCreate);
exports.default = routes;
