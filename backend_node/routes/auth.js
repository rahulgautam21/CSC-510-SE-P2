const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn, googleSignup } = require("../controllers/auth");

/**
 * @swagger
 * /api/signup:
 *  post:
 *    description: Signup API
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: NOT able to save user in DB
 *      '422':
 *        description: Unprocessable Entity
 *    parameters:
 *      - name: requestBody
 *        in: body
 *        required: true
 *        type: object
 *        value: '{"name": "testname", "email":"test@test.com", "password":"testpassword"}'
 */

router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({
      min: 3,
    }),
  ],
  signup
);

/**
 * @swagger
 * /api/signin:
 *  post:
 *    description: SignIn API
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: NOT able to save user in DB
 *      '422':
 *        description: Unprocessable Entity
 *    parameters:
 *      - name: requestBody
 *        in: body
 *        required: true
 *        type: object
 *        value: '{"email":"devi@gmail.com", "password":"pass"}'
 */
router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 }),
  ],
  signin
);

/**
 * @swagger
 * /api/signout:
 *  get:
 *    description: SignOut API
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: NOT able to save user in DB
 *      '422':
 *        description: Unprocessable Entity
 */
router.get("/signout", signout);

/**
 * @swagger
 * /api/googlesignup:
 *  post:
 *    description: Signup API For Google Sign in
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: NOT able to save user in DB
 *      '422':
 *        description: Unprocessable Entity
 *    parameters:
 *      - name: requestBody
 *        in: body
 *        required: true
 *        type: object
 *        value: '{"name": "testname", "email":"test@test.com", "password":"testpassword"}'
 */

router.post(
  "/googlesignup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({
      min: 3,
    }),
  ],
  googleSignup
);

module.exports = router;
