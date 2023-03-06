const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");
const EventsEmitter = require("events");
const logEvents = require("./logEvents.js");

class Emitter extends EventsEmitter {}

const myEmitter = new Emitter();
const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(`New Request! -->\tURL: ${req.url}\tMethod: ${req.method}`);
  if (req.url === "/" || req.url === "index.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    const filePath = path.join(__dirname, "views", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      res.end(data);
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});

// myEmitter.on("log", (msg) => logEvents(msg));
// myEmitter.emit("log", "Log event emitted");
