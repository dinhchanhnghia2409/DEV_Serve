const jwt = require("jsonwebtoken")
require('dotenv').config()

const checkToken = (req, res, next) => {
  const token = req.headers["authorization"]
  console.log(token);
  token = token.slice(7, token.length);
  if (token) {
    jwt.verify(token,process.env.key. key, (err, decoded) => {
      if (err) {
        return res.json({
          status: false,
          msg: "token is invalid",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      status: false,
      msg: "Token is not provided",
    });
  }
};

module.exports = {
  checkToken: checkToken,
};