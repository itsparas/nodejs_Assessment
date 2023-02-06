const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authorization = async (req, res, next) => {
  const beareredtoken = req.header("Authorization");
  const unbeareredtoken = beareredtoken.replace("Bearer ", "");
  const key = process.env.KEY;
  jwt.verify(unbeareredtoken, key, (err, decoded) => {
    if (!err) {
      req.id = decoded ? decoded.id : undefined;
      next();
    } else {
      res.json({
        message: err.message,
      });
    }
  });
};

module.exports = authorization;
