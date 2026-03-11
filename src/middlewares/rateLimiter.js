const rateLimit = require("express-rate-limit");

module.exports = rateLimit({
  windowMs: 60000,
  max: 50,
  message: "Too many requests",
});
