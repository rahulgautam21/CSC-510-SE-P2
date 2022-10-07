const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Category Routes", () => {
  // signup an admin user
  it("successfully signup a new user", async function () {
    const signupResponse = await chai
      .request("http://localhost:8000/api")
      .post("/signup")
      .send({
        name: "Admin",
        email: "admin@test.com",
        password: "Admin12345",
        role: 1,
      })
      .set("Content-Type", "application/json");

    expect(signupResponse).to.have.status(200);
  });

  // create category API test
  it("create category API testing", async function () {
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
        name: "TestCategory",
      })
      .set("Authorization", `Bearer ${signinResponse.body.token}`)
      .set("Content-Type", "application/json");

    expect(createCategoryResponse).to.have.status(200);
  });

  // update category API test
  it("update category API testing", async function () {
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
        name: "TestCategory2",
      })
      .set("Authorization", `Bearer ${signinResponse.body.token}`)
      .set("Content-Type", "application/json");

    expect(createCategoryResponse).to.have.status(200);

    const updateCategoryResponse = await chai
      .request("http://localhost:8000/api")
      .put(
        `/category/${createCategoryResponse.body.category._id}/${signinResponse.body.user._id}`
      )
      .send({
        name: "TestCategoryUpdated",
      })
      .set("Authorization", `Bearer ${signinResponse.body.token}`)
      .set("Content-Type", "application/json");

    expect(updateCategoryResponse).to.have.status(200);
  });

  // get all categories
  it("get all categories API testing", async function () {
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
        name: "TestCategory1",
      })
      .set("Authorization", `Bearer ${signinResponse.body.token}`)
      .set("Content-Type", "application/json");

    expect(createCategoryResponse).to.have.status(200);

    const getAllCategoriesResponse = await chai
      .request("http://localhost:8000/api")
      .get("/categories")
      .set("Authorization", `Bearer ${signinResponse.body.token}`)
      .set("Content-Type", "application/json");

    expect(getAllCategoriesResponse).to.have.status(200);
  });

  // get a category by categoryId
  it("get a category by categoryId API testing", async function () {
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
        name: "TestCategory3",
      })
      .set("Authorization", `Bearer ${signinResponse.body.token}`)
      .set("Content-Type", "application/json");

    expect(createCategoryResponse).to.have.status(200);

    const getCategoryByIdResponse = await chai
      .request("http://localhost:8000/api")
      .get(`/category/${createCategoryResponse.body.category._id}`)
      .set("Authorization", `Bearer ${signinResponse.body.token}`)
      .set("Content-Type", "application/json");

    expect(getCategoryByIdResponse).to.have.status(200);
  });

  // delete a category
  it("delete a category by categoryId and userId API testing", async function () {
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
        name: "TestCategory4",
      })
      .set("Authorization", `Bearer ${signinResponse.body.token}`)
      .set("Content-Type", "application/json");

    expect(createCategoryResponse).to.have.status(200);

    const deletecategoryResponse = await chai
      .request("http://localhost:8000/api")
      .delete(
        `/category/${createCategoryResponse.body.category._id}/${signinResponse.body.user._id}`
      )
      .set("Authorization", `Bearer ${signinResponse.body.token}`)
      .set("Content-Type", "application/json");

    expect(deletecategoryResponse).to.have.status(200);
  });
});
