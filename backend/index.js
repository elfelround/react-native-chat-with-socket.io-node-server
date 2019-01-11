const express = require("express");
const app = express();
const server = require("http").createServer(app);
//vs var http = require('http').Server(app);
const io = require ("socket.io").listen(server);
//vs var io = require('socket.io')(http);
const port = 3000;

io.on("connection", socket => {
    console.log("a user connected :D");
    socket.on("chat message"/*tag added on app.js
    when sending the io.emit to identify*/, msg => {
        console.log(msg);
        io.emit/* funny that this is both used on the client
        and server, this will send the received message to 
        all of the clients listening to the SOCKET IO SERVER
        (THE IP WE USED, so i guess u need new ip/port for each
        chat room), sorta like a broacasted
        post req */("chat message", msg);
    });
});

server.listen(port, () => console.log("server is running on port" + port));