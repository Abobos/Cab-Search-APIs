import { describe, it } from "mocha";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../src/server";

chai.use(chaiHttp);

describe("POST /drivers", () => {
  it("Should return status of failure upon supplying empty fields", (done) => {
    chai
      .request(app)
      .post("/api/v1/drivers")
      .send({
        name: "",
        email: "",
        phone_number: "",
        license_number: "",
        car_number: "",
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an("object");
        expect(res.body.status).to.be.eql("failure");
        expect(res.body.error).to.be.an("object");
        expect(res.body.error).to.haveOwnProperty("name");
        expect(res.body.error.name).to.be.eql("name is required");
        expect(res.body.error).to.haveOwnProperty("email");
        expect(res.body.error.email).to.be.eql("email is required");
        expect(res.body.error).to.haveOwnProperty("phone_number");
        expect(res.body.error.phone_number).to.be.eql(
          "phone_number is required"
        );
        expect(res.body.error).to.haveOwnProperty("license_number");
        expect(res.body.error.license_number).to.be.eql(
          "license_number is required"
        );
        expect(res.body.error).to.haveOwnProperty("car_number");
        expect(res.body.error.car_number).to.be.eql("car_number is required");
        done();
      });
  });

  it("Should return name is invalid", (done) => {
    chai
      .request(app)
      .post("/api/v1/drivers")
      .send({
        name: "1234",
        email: "abobogift@gmail.com",
        phone_number: "8167672028",
        license_number: "ADC12819BC3",
        car_number: "AH-01-ZA-0838",
      })

      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an("object");
        expect(res.body.status).to.be.eql("failure");
        expect(res.body.error).to.be.an("object");
        expect(res.body.error).to.haveOwnProperty("name");
        expect(res.body.error.name).to.be.eql("name is not valid");
        done();
      });
  });

  it("Should return email is not valid", (done) => {
    chai
      .request(app)
      .post("/api/v1/drivers")
      .send({
        name: "Blessing Makaraba",
        email: "abcom",
        phone_number: "8167672028",
        license_number: "ADC12819BC3",
        car_number: "AH-01-ZA-0838",
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an("object");
        expect(res.body.status).to.be.eql("failure");
        expect(res.body.error).to.be.an("object");
        expect(res.body.error).to.haveOwnProperty("email");
        expect(res.body.error.email).to.be.eql("email is not valid");
        done();
      });
  });

  it("Should return 'phone number is not valid. It should be a 10 digit number'", (done) => {
    chai
      .request(app)
      .post("/api/v1/drivers")
      .send({
        name: "Blessing Makaraba",
        email: "email@gmail.com",
        phone_number: "08167672019",
        license_number: "ADC12819BC3",
        car_number: "AH-01-ZA-0838",
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an("object");
        expect(res.body.status).to.be.eql("failure");
        expect(res.body.error).to.be.an("object");
        expect(res.body.error).to.haveOwnProperty("phone_number");
        expect(res.body.error.phone_number).to.be.eql(
          "phone number is not valid. It should be a 10 digit number"
        );

        done();
      });
  });
  it("Should return 'license number is not valid. It should be of the form 'ABC00578AA2''", (done) => {
    chai
      .request(app)
      .post("/api/v1/drivers")
      .send({
        name: "Blessing Makaraba",
        email: "email@gmail.com",
        phone_number: "8167672019",
        license_number: "ADC12819BBC3",
        car_number: "AH-01-ZA-0838",
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an("object");
        expect(res.body.status).to.be.eql("failure");
        expect(res.body.error).to.be.an("object");
        expect(res.body.error).to.haveOwnProperty("license_number");
        expect(res.body.error.license_number).to.be.eql(
          "license number is not valid. It should be of the form 'ABC00578AA2'"
        );

        done();
      });
  });
  it("Should return 'car number is not valid. It should be of the form 'MH-01-XX-0001'", (done) => {
    chai
      .request(app)
      .post("/api/v1/drivers")
      .send({
        name: "Blessing Makaraba",
        email: "email@gmail.com",
        phone_number: "8167672019",
        license_number: "ADC12819BC3",
        car_number: "AH-01dafs-ZA-0838",
      })
      .end((err, res) => {
        expect(res.status).to.be.eql(422);
        expect(res.body).to.be.an("object");
        expect(res.body.status).to.be.eql("failure");
        expect(res.body.error).to.be.an("object");
        expect(res.body.error).to.haveOwnProperty("car_number");
        expect(res.body.error.car_number).to.be.eql(
          "car number is not valid. It should be of the form 'MH-01-XX-0001'"
        );
        done();
      });
  });
});
