const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const app = express();


const PORT = 5000 | process.env.PORT;
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

// Connection When User hit the URL
io.on('connection', socket=>{

    // Conformation Messege for Server
    console.log("Socket.IO Connected");

    // The Conformation Messege that send to fronend that Socket.IO is connected
    socket.emit("Conformation-Messege","Socket.IO Connected Successfully with FrontEnd");

    // This is the broadcast messege that all old user recieve when new user is active or hit the url
    socket.broadcast.emit('Broadcase-Messege', "New User Active");

    // This is the Reciver that is active when the messege button is press on frontend page
    socket.on('BroadCastMessege', msg=>{
        console.log(msg);
        socket.emit("messege", msg);

    });
})

server.listen(PORT, ()=>{
    console.log(`Your Server is running in Port: ${PORT}`);
})