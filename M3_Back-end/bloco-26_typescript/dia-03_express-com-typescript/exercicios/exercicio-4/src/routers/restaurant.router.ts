import { Router } from "express";

import RestaurantController from "../controllers/restaurant.controller";

const restaurantRouter = Router();

const restaurantController = new RestaurantController();

console.log(this);

restaurantRouter.get('/restaurants', (req, res) => restaurantController.getAll(req, res));

export default restaurantRouter; 