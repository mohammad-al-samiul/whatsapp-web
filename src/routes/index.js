const express = require("express");
const router = express.Router();

// Module routes
const messageRoutes = require("../modules/message/message.routes");

// Register routes
router.use("/messages", messageRoutes);

module.exports = router;
