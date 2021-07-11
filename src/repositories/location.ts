import Model from "../models";

import { ConflictError } from "../exceptions";

class LocationRepository {
  public driver: Model;

  constructor() {
    this.driver = new Model("locations");
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

      return result.rowCount;
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

      return result;
    } catch (e) {
      throw e;
    }
  }

  async UpdateMultiple(
    column: string,
    columnII: string,
    condition: string,
    values: string,
    valuesII: string
  ) {
    try {
      const result = await this.driver.updateMultiple({
        column,
        columnII,
        condition,
        values,
        valuesII,
      });

      return result;
    } catch (e) {
      throw e;
    }
  }
}

export default new LocationRepository();
