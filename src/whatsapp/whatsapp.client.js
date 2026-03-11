const { Client, LocalAuth } = require("whatsapp-web.js");
const logger = require("../utils/logger");

let io;

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: true },
});

client.on("qr", (qr) => {
  logger.info("QR generated");

  if (io) {
    io.emit("qr", qr);
  }
});

client.on("ready", () => {
  logger.info("WhatsApp ready");

  if (io) {
    io.emit("ready");
  }
});

client.on("disconnected", (reason) => {
  logger.error(`Disconnected: ${reason}`);
  client.initialize();
});

client.initialize();

function setSocket(socket) {
  io = socket;
}

module.exports = {
  client,
  setSocket,
};
