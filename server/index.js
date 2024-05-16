const express = require('express')
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT= process.env.port||9000

io.on('connection', (socket) => {
    console.log('a user connected',socket.id);
  });

server.listen(PORT,()=>{console.log('app is running');})