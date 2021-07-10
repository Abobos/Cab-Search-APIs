import Model from "../models";

import { ConflictError, InternalServerError } from "../exceptions";

class DriverRpository {
  public driver: Model;

  constructor() {
    this.driver = new Model("drivers");
  }

  async create(column: string, values: string) {
    try {
      const result = await this.driver.insert({
        column,
        values,
      });

      return result;
    } catch (e) {
      const { code, constraint } = e;

      let column = "";

      if (code === "23505") {
        column = constraint.split("_")[1];

        throw new ConflictError(`${column} already exists`);
      }

      throw e;
    }
  }

  async findOne(column: string, condition: string) {
    try {
      const result = await this.driver.select({
        column,
        condition,
      });

      return result;
    } catch (e) {
      throw e;
    }
  }

  async findAll(column: string, condition: string) {
    try {
      const result = await this.driver.select({
        column,
        condition,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  async Update(column: string, condition: string, values: string) {
    try {
      const result = await this.driver.update({
        column,
        condition,
        values,
      });

      return result.rows[0];
    } catch (e) {
      throw e;
    }
  }
}

export default new DriverRpository();
