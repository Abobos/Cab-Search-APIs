import { describe, it } from "mocha";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../src/server";

chai.use(chaiHttp);

describe("App", () => {
  it("Should display a welcome to Cab Search System Application REST API", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an("object");
        expect(res.body.status).to.eql("success");
        expect(res.body.message).to.eql(
          "Welcome to Cabs Searh Application System API"
        );
        done();
      });
  });

  it("Should return not found message for unavailable route", (done) => {
    chai
      .request(app)
      .get("/many")
      .end((err, res) => {
        expect(res.status).to.be.eql(404);
        expect(res.body).to.be.an("object");
        expect(res.body.status).to.eql("failure");
        expect(res.body.error).to.eql(
          "This route is unavailable on the server"
        );
        done();
      });
  });
});
