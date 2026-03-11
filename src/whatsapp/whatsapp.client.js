const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const logger = require("../utils/logger");

let io = null;

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "whatsapp-session",
  }),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

client.on("qr", (qr) => {
  logger.info("QR generated");

  // Smaller QR in terminal
  qrcode.generate(qr, { small: true });

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
  logger.error(`WhatsApp disconnected: ${reason}`);
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
