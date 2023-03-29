const express = require('express');
const cors = require('cors')
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.get('/', (req, res) => {
    res.send('Welcome');
});

io.on('connection', (socket) => {
    //console.log('a user connected');
    socket.on('message', (msg) => {
        //console.log('message: ' + msg);
        socket.emit("message", msg);
        //io.emit('message', 'server says: click accepted..');
    });
    
});

//server.listen(3080, '78.190.140.4');
/*
server.listen('80','192.168.1.1', () => {
    console.info(`server started on port 80`);
});
*/
/*
server.listen(8080, '127.0.0.1', () => {
    console.info(`server started on port 8080`);
});
*/
server.listen(3001, () => {
    console.log('listening on 3001');
});