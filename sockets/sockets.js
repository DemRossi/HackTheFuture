const socketio = require('socket.io');

const users = {};

// console.log('here');
let go = (server) => {
    // console.log('here');
    const io = socketio(server);

    io.on('connection', (socket) => {
        socket.on('new-user', (name) => {
            if (Object.keys(users).length) {
                // not empty
                users[socket.id] = { name: name, role: 'player' };
            } else {
                // empty
                users[socket.id] = { name: name, role: 'gamemaster' };
            }
            console.log(users);
            socket.broadcast.emit('user-connected', name);
        });
        socket.on('send-chat-message', (message) => {
            // console.log(message);
            socket.broadcast.emit('chat-message', {
                message: message,
                user: users[socket.id],
            });
        });
        socket.on('disconnect', () => {
            socket.broadcast.emit('user-disconnected', users[socket.id]);
            delete users[socket.id];
            console.log(users);
        });
    });
};

module.exports.go = go;
