import { describe, it } from "mocha";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../src/server";

chai.use(chaiHttp);

describe("POST /locations", () => {
  it("", (done) => {
    chai
      .request(app)
      .post("/api/v1/locations")
      .send({
        driverId: "",
        latitude: "45.77",
        longitude: "98.89",
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an("object");

        done();
      });
  });
});
