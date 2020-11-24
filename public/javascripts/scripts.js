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
    appendMessage(data);
});
socket.on('user-connected', (data) => {
    console.log(data);
    appendMessage(`${data} has joined.`);
});

messageForm.addEventListener('submit', (e) => {
    const message = messageInput.value;
    socket.emit('send-chat-message', message);
    messageInput.value = '';

    appendMessage(message);
    e.preventDefault();
});

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}
