const socketio = require('socket.io');

const users = {};

// console.log('here');
let go = (server) => {
    // console.log('here');
    const io = socketio(server);

    io.on('connection', (socket) => {
        socket.on('new-user', (name) => {
            users[socket.id] = name;
            socket.broadcast.emit('user-connected', name);
        });
        socket.on('send-chat-message', (message) => {
            // console.log(message);
            socket.broadcast.emit('chat-message', message);
        });
    });
};

module.exports.go = go;
