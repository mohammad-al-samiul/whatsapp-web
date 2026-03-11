const PQueue = require("p-queue");

const queue = new PQueue({
  concurrency: 5,
});

module.exports = queue;
