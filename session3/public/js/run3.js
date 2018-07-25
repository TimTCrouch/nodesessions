const socket = io();

$('#btn').click((e) => {
    socket.emit('msg', {message: $('#msg').val()});
});

//set up a handler for messages sent from the server
socket.on('response', (data) => {
    $('#output').append(`<li>${data.message}</li>`)
});


