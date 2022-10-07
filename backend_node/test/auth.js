const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Authentication Routes", () => {
  describe("Signup APIs", () => {
    // invalid user input during signup process
    it("Missing required inputs from signup API", async function () {
      const res = await chai
        .request("http://localhost:8000/api")
        .post("/signup")
        .send({
          email: "dev@kumar.com",
          password: "Test123456",
        })
        .set("Content-Type", "application/json");

      expect(res).to.have.status(422);
    });

    // successfully signedup an user
    it("successfully signup a new user", async function () {
      const res = await chai
        .request("http://localhost:8000/api")
        .post("/signup")
        .send({
          name: "Dev",
          lastname: "Kumar",
          email: "dev@kumar.com",
          password: "Test123456",
        })
        .set("Content-Type", "application/json");

      expect(res).to.have.status(200);
    });

    // email and password does not match during signin process
    it("email and password does not match during signin process", async function () {
      const res = await chai
        .request("http://localhost:8000/api")
        .post("/signin")
        .send({
          email: "dev2@kumar.com",
          password: "Test123455",
        })
        .set("Content-Type", "application/json");

      expect(res).to.have.status(400);
    });

    // missing user input during signin process
    it("Missing required inputs from signin API", async function () {
      const res = await chai
        .request("http://localhost:8000/api")
        .post("/signin")
        .send({
          password: "Test123456",
        })
        .set("Content-Type", "application/json");

      expect(res).to.have.status(422);
    });

    // invalid user input during signin process
    it("Invalid required inputs from signin API", async function () {
      const res = await chai
        .request("http://localhost:8000/api")
        .post("/signin")
        .send({
          email: "dev1@kumar.com",
          password: "Test123456",
        })
        .set("Content-Type", "application/json");

      expect(res).to.have.status(400);
    });

    // Successfully sign in an user
    it("Successfully signin an user", async function () {
      const res = await chai
        .request("http://localhost:8000/api")
        .post("/signin")
        .send({
          email: "dev@kumar.com",
          password: "Test123456",
        })
        .set("Content-Type", "application/json");
      expect(res).to.have.status(200);
    });

    // Successfully sign out an user
    it("Successfully signout an user", async function () {
      const res = await chai
        .request("http://localhost:8000/api")
        .get("/signout")
        .set("Content-Type", "application/json");

      expect(res).to.have.status(200);
    });
  });
});
