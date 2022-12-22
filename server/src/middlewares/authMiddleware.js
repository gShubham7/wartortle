require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token) {
    const verification = jwt.verify(token, SECRET_KEY);
    if (verification) {
      req.userId = verification.id;
      req.userRole = verification.role;
      return next();
    } else {
      return res.status(401).send("Operation not allowed");
    }
  } else {
    return res.status(403).send("Token not provided");
  }
};

module.exports = authMiddleware;
