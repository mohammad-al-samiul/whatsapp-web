const { Server } = require("socket.io");
const { setSocket } = require("../whatsapp/whatsapp.client");

function initSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: [process.env.CLIENT_URL, process.env.PRODUCTION_URL],
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Socket connected");
  });

  setSocket(io);
}

module.exports = { initSocket };
