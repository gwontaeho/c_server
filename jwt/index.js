const jwt = require("jsonwebtoken");

const signToken = (payload, options) =>
  jwt.sign(payload, process.env.JWT_SECRET, options);

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {}
};

module.exports = {
  signToken,
  verifyToken,
};
