const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const cors = require('cors')
const bodyParser = require('body-parser');
const fs = require('fs');


var os = require("os");
var pty = require("node-pty");

var shell = os.platform() === "win32" ? "powershell.exe" : "bash";

var ptyProcess = pty.spawn(shell, [], {
  name: "xterm-color",
  cols: 80,
  rows: 30,
  cwd: './user',
  env: process.env,
});

const app = express();
const server = createServer(app);
const io = new Server(server,{cors:'*'});


app.use(bodyParser.json());
app.use(cors())

const PORT = process.env.port||9000;
let socketInstance;

// io.on('terminal:write','cd ./user')



ptyProcess.onData((data) => {
  console.log(data);
  io.emit("terminal:data", data);
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("terminal:write", (data) => {
    console.log("Term", data);
    if (data.trim().toLowerCase().startsWith("cd")) {
      console.log("CD command disabled");
      return; // ignore the CD command
    }
        ptyProcess.write(data);
  });

});


app.post('/submit', (req, res) => {
  const { code } = req.body; // Destructure code from request body

  fs.writeFile('./user/ant.cpp', code, (err) => {
    if (err) {
      console.error('Error writing to file', err);
      res.status(500).send('Error writing to file');
    } else {
      console.log('File written successfully');


      // io.on("connection", (socket) => {
      //   console.log("a user connected", socket.id);
      //   socket.on("terminal:write", () => {
          
      //     ptyProcess.write("g++ ant.cpp ");
      //   });
      // });


      res.send('File written successfully');
    }
  });
});


server.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
