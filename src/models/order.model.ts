import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces';
import connectionObj from './connection';

class OrderModel {
  public connection: Pool;

  constructor(connection = connectionObj) {
    this.connection = connection;
  }

  async findAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute(
      `SELECT
      or.id, or.userId, JSON_ARRAYAGG(pr.id) productsIds
    FROM
      Trybesmith.Orders or
    INNER JOIN Trybesmith.Products pr ON
      pr.orderId = or.id
    GROUP BY 
      or.id`,
    );

    return result as IOrder[];
  }
}

export default new OrderModel();