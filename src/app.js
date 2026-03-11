const express = require("express");
const cors = require("cors");
const rateLimiter = require("./middlewares/rateLimiter");

const errorHandler = require("./middlewares/error.middleware");
const routes = require("./routes");

const app = express();

const allowedOrigins = [process.env.CLIENT_URL];

app.use(
  cors({
    origin: allowedOrigins,
  }),
);
app.use(express.json());

app.use(rateLimiter);

app.use("/api", routes);

app.use(errorHandler);

module.exports = app;
