const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
// import fs
const fs = require("fs");

chai.use(chaiHttp);

describe("Product Routes", () => {
  // create product API testing
  it("Create a new Product", async function () {
    const signinResponse = await chai
      .request("http://localhost:8000/api")
      .post("/signin")
      .send({
        email: "admin@test.com",
        password: "Admin12345",
      })
      .set("Content-Type", "application/json");

    const createCategoryResponse = await chai
      .request("http://localhost:8000/api")
      .post(`/category/create/${signinResponse.body.user._id}`)
      .send({
        name: "NewCategory",
      })
      .set("Authorization", `Bearer ${signinResponse.body.token}`)
      .set("Content-Type", "application/json");

    const createProductResponse = await chai
      .request("http://localhost:8000/api")
      .post(`/category/create/${signinResponse.body.user._id}`)
      .send({
        name: "Test Product",
        description: "Test Product Description",
        price: 10,
        stock: 1,
        category: createCategoryResponse.body._id,
      })
      .set("Authorization", `Bearer ${signinResponse.body.token}`)
      .set("Content-Type", "application/json");

    expect(createProductResponse).to.have.status(200);
  });
});
