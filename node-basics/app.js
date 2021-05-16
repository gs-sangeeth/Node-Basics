const Logger = require("./logger");
const logger = new Logger();

logger.on("logging", (arg) => {
  console.log("Logged message", arg);
});

logger.log("Oh hi Mark!!");

// Http Module

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Think Mark ! Think!");
    res.end();
  }
});

// server.on("connection", (socket) => {
//   console.log("Connected!!");
// });

server.listen(3000);
console.log("Listening to port 3000...");
