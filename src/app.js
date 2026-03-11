const express = require("express");
const cors = require("cors");

const messageRoutes = require("./modules/message/message.routes");
const rateLimiter = require("./middlewares/rateLimiter");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use(rateLimiter);

app.use("/api/messages", messageRoutes);

app.use(errorHandler);

module.exports = app;
