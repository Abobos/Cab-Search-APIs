import { describe, it } from "mocha";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../src/server";

chai.use(chaiHttp);

describe("POST /locations", () => {
  it("Should return status of failure 'driverId is required'", (done) => {
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
        expect(res.body.status).to.be.eql("failure");
        expect(res.body.error).to.be.an("object");
        expect(res.body.error).to.haveOwnProperty("driverId");
        expect(res.body.error.driverId).to.be.eql("driverId is required");
        done();
      });
  });

  it("Should return status of failure 'latitude is required'", (done) => {
    chai
      .request(app)
      .post("/api/v1/locations")
      .send({
        driverId: "1",
        latitude: "",
        longitude: "98.89",
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an("object");
        expect(res.body.status).to.be.eql("failure");
        expect(res.body.error).to.be.an("object");
        expect(res.body.error).to.haveOwnProperty("latitude");
        expect(res.body.error.latitude).to.be.eql("latitude is required");
        done();
      });
  });
  it("Should return status of failure 'longitude is required'", (done) => {
    chai
      .request(app)
      .post("/api/v1/locations")
      .send({
        driverId: "1",
        latitude: "45.77",
        longitude: "",
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an("object");
        expect(res.body.status).to.be.eql("failure");
        expect(res.body.error).to.be.an("object");
        expect(res.body.error).to.haveOwnProperty("longitude");
        expect(res.body.error.longitude).to.be.eql("longitude is required");
        done();
      });
  });
});
