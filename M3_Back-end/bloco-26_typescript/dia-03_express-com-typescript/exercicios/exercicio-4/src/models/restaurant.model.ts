import Restaurant from '../interfaces/restaurant.interfaces';
import { Pool } from 'mysql2/promise';


class RestaurantModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  // propriedade x método
  // generic para tratar o retorno da lib mysql2
  getAll = async (): Promise<Restaurant[]> => {
    const sql = 'SELECT * FROM Restaurants';
    const [rows] = await this.connection.query(sql);
    return rows as Restaurant[];
  }
};

export default RestaurantModel;