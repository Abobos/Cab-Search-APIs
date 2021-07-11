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
          "Welcome to Cars Searh Application System API"
        );
        done();
      });
  });
});
