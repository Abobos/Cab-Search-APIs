// import { describe, it } from "mocha";
// import chai, { expect } from "chai";
// import chaiHttp from "chai-http";
// import app from "../src/server";

// chai.use(chaiHttp);

// describe("POST /signup & /signin", () => {
//   it("Should display an error message of email is required, and it should be of the form; example@ymail.com", (done) => {
//     chai
//       .request(app)
//       .post("/api/v1/auth/signup")
//       .send({
//         email: "giftabobo@gmail",
//         first_name: "Gift",
//         last_name: "Abobo",
//         password: "Bless9",
//         phone_number: "08167672019",
//         address: "10 Oladipupo Oduwole",
//       })
//       .end((err, res) => {
//         expect(res.status).to.be.eql(422);
//         expect(res.body).to.be.an("object");
//         expect(res.body.status).to.eql("error");
//         expect(res.body.error).to.eql(
//           "email is required, and it should be of the form; example@ymail.com"
//         );
//         done();
//       });
//   });
// });
