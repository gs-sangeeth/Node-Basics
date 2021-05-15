const EventEmitter = require("events");

var url = "demo-url";

class Logger extends EventEmitter {
  log(message) {
    // Log the message
    console.log(message);

    // Raise an event
    this.emit("logging", { data: message });
  }
}

module.exports = Logger;
