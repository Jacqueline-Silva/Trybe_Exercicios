"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurant_controller_1 = __importDefault(require("../controllers/restaurant.controller"));
const restaurantRouter = (0, express_1.Router)();
const restaurantController = new restaurant_controller_1.default();
console.log(this);
restaurantRouter.get('/restaurants', (req, res) => restaurantController.getAll(req, res));
exports.default = restaurantRouter;
