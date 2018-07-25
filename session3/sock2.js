const express = require('express');
const app = express();
//we need to use the HTTP package to bridge express and Socket.io
const http = require('http').Server(app);
//adding a new require for socket.io and initializing it with HTTP
const socketIo = require('socket.io')(http);
const chalk = require('chalk');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home2.html');
});

//main Socket.io handler
socketIo.on('connection', (socket) => {
    console.log(chalk.magenta('A user connected!'));
});

//VERY IMPORTANT!! Changed to calling listen on http rather than app
http.listen(process.env.PORT || 3000, () => {
    console.log(chalk.green('Listening on port 3000'));
});

