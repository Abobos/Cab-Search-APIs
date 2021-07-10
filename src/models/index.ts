import db from "@config/pool";
import {
  queryParamsI,
  queryParamsII,
  queryParamsIII,
  queryParamsIV,
} from "../interfaces";
import { logger } from "../utils";

class UniversalModel {
  private resource: string;

  constructor(table: string) {
    this.resource = table;
  }

  async insert(queryDetails: queryParamsII): Promise<any> {
    const queryStatement = `INSERT INTO ${this.resource} (${queryDetails.column}) 
                            VALUES (${queryDetails.values}) RETURNING *`;
    logger.info(queryStatement);

    const { rows } = await db.query(queryStatement);

    return rows[0];
  }

  async select(queryDetails: queryParamsIII): Promise<any> {
    const queryStatement = `SELECT ${queryDetails.column} FROM ${this.resource}
                            WHERE ${queryDetails.condition}`;
    logger.info(queryStatement);

    const result = await db.query(queryStatement);

    return result;
  }

  async delete(queryDetails: queryParamsI): Promise<any> {
    const queryStatement = `DELETE FROM ${this.resource} WHERE ${queryDetails.condition}`;
    logger.info(queryStatement);

    const result = await db.query(queryStatement);

    return result;
  }

  async update(queryDetails: queryParamsIV): Promise<any> {
    const queryStatement = `UPDATE ${this.resource} SET ${queryDetails.column} = '${queryDetails.values}'
                            WHERE ${queryDetails.condition} RETURNING ${queryDetails.column}`;
    logger.info(queryStatement);

    const { rows } = await db.query(queryStatement);

    console.log(rows);

    return rows;
  }
}

export default UniversalModel;
