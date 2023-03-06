const fsPromises = require("fs").promises;
const path = require("path");
const process = require("node:process");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// function start() {
//   fs.readFile(
//     path.join(__dirname, "files", "starter.txt"),
//     "utf8",
//     (err, data) => {
//       if (err) throw err;
//       console.log(data);
//       setImmediate(reply);
//     }
//   );
// }

// function reply() {
//   fs.writeFile(
//     path.join(__dirname, "files", "reply.txt"),
//     "Nice to meet you, Arian",
//     (err) => {
//       if (err) throw err;
//       console.log("Written complete in reply.txt");
//       setImmediate(append);
//     }
//   );
// }

// function append() {
//   fs.appendFile(
//     path.join(__dirname, "files", "reply.txt"),
//     "\n\nSame for me, it's a pleasure to meet you",
//     (err) => {
//       if (err) throw err;
//       console.log("Append complete in reply.txt");
//       setImmediate(rename);
//     }
//   );
// }

// function rename() {
//   fs.rename(
//     path.join(__dirname, "files", "reply.txt"),
//     path.join(__dirname, "files", "new_reply.txt"),
//     (err) => {
//       if (err) throw err;
//       console.log("Rename complete in reply.txt");
//     }
//   );
// }

process.on("uncaughtException", (err, origin) => {
  console.error(`There was an uncaught exception: ${err}`);
  process.exit(1);
});

console.log("Helloo...");

// start();
// notExistentFunction();
