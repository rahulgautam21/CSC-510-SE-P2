const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  updateUser,
  userPurchaseList,
} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

// get parameters
router.param("userId", getUserById);

/**
 * @swagger
 * /api/user/{userId}:
 *  get:
 *    description: getUser API
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: NOT able to save user in DB
 *      '422':
 *        description: Unprocessable Entity
 *    parameters:
 *      - name: Authorization
 *        in: header
 *        required: true
 *        type: string
 *      - name: userId
 *        in: path
 *        required: true
 *        type: string
 */
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

/**
 * @swagger
 * /api/user/{userId}:
 *  put:
 *    description: updateUser API
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: NOT able to save user in DB
 *      '422':
 *        description: Unprocessable Entity
 *    parameters:
 *      - name: Authorization
 *        in: header
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
 *        value: '{"name": "testname", "email":"test@test.com"}'
 */
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

// get orders route
router.get(
  "/orders/user/:userId",
  isSignedIn,
  isAuthenticated,
  userPurchaseList
);

module.exports = router;
