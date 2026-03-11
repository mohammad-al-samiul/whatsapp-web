const { client } = require("../../whatsapp/whatsapp.client");
const queue = require("./message.queue");

async function sendMessage(phone, message) {
  return queue.add(async () => {
    const chatId = `${phone}@c.us`;

    const result = await client.sendMessage(chatId, message);

    return result;
  });
}

module.exports = {
  sendMessage,
};
