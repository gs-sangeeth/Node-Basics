const Logger = require("./logger");
const logger = new Logger();

logger.on("logging", (arg) => {
  console.log("Logged message", arg);
});

logger.log("Oh hi Mark!!");
