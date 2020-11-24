const socket = io();
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

const name = prompt('What is your name?');
appendMessage(`you joined.`);
socket.emit('new-user', name);

// console.log('test');
socket.on('chat-message', (data) => {
    console.log(data);
    appendMessage(`${data.name} : ${data.message}`);
});
socket.on('user-connected', (data) => {
    console.log(data);
    appendMessage(`${data} has joined.`);
});
socket.on('user-disconnected', (data) => {
    console.log(data);
    appendMessage(`${data} disconnected.`);
});
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('send-chat-message', message);
    messageInput.value = '';

    appendMessage(`You : ${message}`);
});

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}
