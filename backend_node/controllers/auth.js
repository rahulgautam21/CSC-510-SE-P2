const User = require("../models/user");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

//Google auth logic
exports.googleSignup = (req, res) => {
  const user = new User(req.body);
  const userEmail = user.email;
  User.findOne({ 'email': userEmail }, (err, founduser) => {
    let mainuser = founduser;
    if (err || !founduser) {
      user.save();
      mainuser = user;
    }

    // create token
    const token = jwt.sign({ _id: mainuser._id }, process.env.SECRET);
    // put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    // send response to front end
    const { _id, name, email, role } = mainuser;
    return res.json({ token, user: { _id, name, email, role } });
  });

};

// Adding user to database after signing up
exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const user = new User(req.body);
  user.save((err, user) => {
    // throw bad request error message
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB",
      });
    }
    // else save details to database
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};

// Validating user before sign in
exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER email does not exists",
      });
    }

    if (!user.autheticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match",
      });
    }

    // create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    // put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    // send response to front end
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, name, email, role } });
  });
};

// Clear cookies after successful sign out
exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signedout successfully",
  });
};

// protected routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
});

// custom middlewares
// Check user authentication to accept or deny access
exports.isAuthenticated = (req, res, next) => {
  const checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};

// To check if user is admin
exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "You are not ADMIN, ACCESS DENIED",
    });
  }
  next();
};
