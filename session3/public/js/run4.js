const socket = io();

//share the code to display the message
displayMessage = (msg) => {
    $('#output').append(`<li>${msg}</li>`)
};

//changed to both send to the server and display message
$('#btn').click((e) => {
    let msg = $('#msg').val();
    socket.emit('msg', {message: msg});
    displayMessage(msg);
});

//display chats sent from the server
socket.on('chat', (data) => {
    displayMessage(data);
});


