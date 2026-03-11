const messageService = require("./message.service");

async function sendMessage(req, res, next) {
  try {
    const { phone, message } = req.body;

    if (!phone || !message) {
      return res.status(400).json({
        success: false,
        message: "phone and message required",
      });
    }

    const result = await messageService.sendMessage(phone, message);

    res.json({
      success: true,
      messageId: result.id._serialized,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  sendMessage,
};
