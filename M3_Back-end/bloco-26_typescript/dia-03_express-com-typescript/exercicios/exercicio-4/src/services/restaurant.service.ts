import connection from "../models/connection";

import RestaurantModel from "../models/restaurant.model";
import Restaurant from "../interfaces/restaurant.interfaces";

class RestaurantService {
  public restaurantModel: RestaurantModel;

  constructor(model: RestaurantModel = new RestaurantModel(connection)) {
    this.restaurantModel = model;
  }

  getAll = async (): Promise<Restaurant[]> => {
    return this.restaurantModel.getAll();
  }
}

export default RestaurantService; 