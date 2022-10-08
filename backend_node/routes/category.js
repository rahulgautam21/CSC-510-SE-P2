const express = require("express");
const router = express.Router();

const {
  getCategoryById,
  createCategory,
  getCategory,
  getAllCategory,
  updateCategory,
  removeCategory,
} = require("../controllers/category");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//Get parameters
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

/**
 * @swagger
 * /api/category/create/{userId}:
 *  post:
 *    description: To create a category
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: NOT able to save category in DB
 *      '401':
 *        description: Unauthorized
 *    parameters:
 *      - name: userId
 *        in: path
 *        required: true
 *        type: string
 *      - name: requestBody
 *        in: body
 *        required: true
 *        type: object
 *        value: '{"name":"testCategory"}'
 *      - name: Authorization
 *        in: header
 *        required: true
 *        type: string
 */
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);

/**
 * @swagger
 * /api/categories:
 *  get:
 *    description: Fetch all existing categories
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: NO categories found
 */
router.get("/categories", getAllCategory);

/**
 * @swagger
 * /api/category/{categoryId}:
 *  get:
 *    description: Fetch an existing category
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *      - name: categoryId
 *        in: path
 *        required: true
 *        type: string
 */
router.get("/category/:categoryId", getCategory);

/**
 * @swagger
 * /api/category/{categoryId}/{userId}:
 *  put:
 *    description: To update a category
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Failed to update category
 *      '401':
 *        description: Unauthorized
 *    parameters:
 *      - name: categoryId
 *        in: path
 *        required: true
 *        type: string
 *      - name: userId
 *        in: path
 *        required: true
 *        type: string
 *      - name: requestBody
 *        in: body
 *        required: true
 *        type: object
 *        value: '{"name":"testCategory"}'
 *      - name: Authorization
 *        in: header
 *        required: true
 *        type: string
 */
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
);

/**
 * @swagger
 * /api/category/{categoryId}/{userId}:
 *  delete:
 *    description: To delete a category
 *    responses:
 *      '200':
 *        description: Successfully deleted
 *      '400':
 *        description: Failed to delete this category
 *      '401':
 *        description: Unauthorized
 *    parameters:
 *      - name: categoryId
 *        in: path
 *        required: true
 *        type: string
 *      - name: userId
 *        in: path
 *        required: true
 *        type: string
 *      - name: Authorization
 *        in: header
 *        required: true
 *        type: string
 */
router.delete(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeCategory
);

module.exports = router;
