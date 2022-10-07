const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("User Routes", () => {
  // getUserById API testing
  it("getuserbyID API", async function () {
    const signinResponse = await chai
      .request("http://localhost:8000/api")
      .post("/signin")
      .send({
        email: "dev@kumar.com",
        password: "Test123456",
      })
      .set("Content-Type", "application/json");

    const getUserByIdResponse = await chai
      .request("http://localhost:8000/api")
      .get(`/user/${signinResponse.body.user._id}`)
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${signinResponse.body.token}`);

    expect(getUserByIdResponse).to.have.status(200);
  });

  // edit user API testing
  it("getuserbyID API", async function () {
    const signinResponse = await chai
      .request("http://localhost:8000/api")
      .post("/signin")
      .send({
        email: "dev@kumar.com",
        password: "Test123456",
      })
      .set("Content-Type", "application/json");

    const getUserByIdResponse = await chai
      .request("http://localhost:8000/api")
      .put(`/user/${signinResponse.body.user._id}`)
      .send({
        lastname: "Patel",
      })
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${signinResponse.body.token}`);

    expect(getUserByIdResponse).to.have.status(200);
  });
});
