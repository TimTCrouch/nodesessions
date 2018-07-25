const socket = io();

//add a button click listener
$('#btn').click((e) => {
    //call emit on the server to send a message
    socket.emit('msg', {message: $('#msg').val()});
});
