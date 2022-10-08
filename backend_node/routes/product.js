const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllUniqueCategories,
} = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

// get parameters
router.param("userId", getUserById);
router.param("productId", getProductById);

/**
 * @swagger
 * /api/product/create/{userId}:
 *  post:
 *    description: To create a product
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: problem with image/Please include all fields/File size too big!/Saving wallpaper in DB failed
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
 *        value: '{"name":"testProduct", "price": 10, "description": "Test description", "stock": 2, "category":"category_id"}'
 *      - name: Authorization
 *        in: header
 *        required: true
 *        type: string
 */
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

/**
 * @swagger
 * /api/product/{productId}:
 *  get:
 *    description: Fetch an existing product
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *      - name: productId
 *        in: path
 *        required: true
 *        type: string
 */
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

/**
 * @swagger
 * /api/product/{productId}/{userId}:
 *  delete:
 *    description: To delete a product
 *    responses:
 *      '200':
 *        description: Successfully deleted
 *      '400':
 *        description: Failed to delete this product
 *      '401':
 *        description: Unauthorized
 *    parameters:
 *      - name: product
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
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);

/**
 * @swagger
 * /api/product/{productId}/{userId}:
 *  put:
 *    description: To update a product
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: problem with image/Updation of product failed
 *      '401':
 *        description: Unauthorized
 *    parameters:
 *      - name: productId
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
 *        value: '{"name":"testProduct"}'
 *      - name: Authorization
 *        in: header
 *        required: true
 *        type: string
 */
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);

/**
 * @swagger
 * /api/products:
 *  get:
 *    description: Fetch all existing products
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: NO product FOUND
 */
router.get("/products", getAllProducts);
router.get("/products/categories", getAllUniqueCategories);

module.exports = router;
