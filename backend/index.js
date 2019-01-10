const express = require("express");
const app = express();
const server = require("http").createServer(app);
//vs var http = require('http').Server(app);
const io = require ("socket.io").listen(server);
//vs var io = require('socket.io')(http);
const port = 3000;

io.on("connection", socket => {
    console.log("a user connected :D");
});

server.listen(port, () => console.log("server is running on port" + port));