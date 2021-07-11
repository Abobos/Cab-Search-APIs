import { describe, it } from "mocha";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../src/server";

chai.use(chaiHttp);

describe("get /cabs", () => {
  it("Should return list of available cars", (done) => {
    chai
      .request(app)
      .get("/api/v1/cabs?latitude=45.77&longitude=98.89")
      .end((err, res) => {
        console.log(res.body);
        expect(res.status).to.be.eql(200);
        expect(res.body).to.be.an("object");
        done();
      });
  });
});
