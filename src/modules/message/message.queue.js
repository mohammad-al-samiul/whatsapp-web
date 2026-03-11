const PQueue = require("p-queue").default;

const queue = new PQueue({
  concurrency: 5,
});

module.exports = queue;
