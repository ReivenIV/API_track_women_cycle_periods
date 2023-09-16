const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

// ----------------------------------------
//   authenticateToken middleware
// ----------------------------------------

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["x-access-token"];

  if (!authHeader) {
    return next(new Error("Token not found"));
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(new Error("Token not valid"));
    }

    req.userId = decoded.userId;
    next();
  });
};

module.exports = authenticateToken;
