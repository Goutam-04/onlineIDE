const express = require('express')
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require("socket.io");

var pty = require('node-pty-prebuilt-multiarch');
var ptyProcess = pty.spawn(bash, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.INIT_CWD,
    env: process.env
  });

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT= process.env.port||9000

ptyProcess.onData(data => {
    io.emit('terminal:data', data)
})


io.on('connection', (socket) => {
    console.log('a user connected',socket.id);
    socket.on('terminal:write', (data) => {
        console.log('Term', data)
        ptyProcess.write(data);
    })
  });

server.listen(PORT,()=>{console.log('app is running');})