const router = require("express").Router();

const controller = require("./message.controller");

router.post("/send", controller.sendMessage);

module.exports = router;
