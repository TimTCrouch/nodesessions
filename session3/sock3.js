const express = require('express');
const app = express();
const http = require('http').Server(app);
const socketIo = require('socket.io')(http);
const chalk = require('chalk');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home3.html');
});

socketIo.on('connection', (socket) => {
    console.log(chalk.magenta('A user connected!'));
    //create a listener to handle messages from the client
    socket.on('msg', (data) => {
        console.log(chalk.cyan(`From the client: ${data.message}`));
    });
});

http.listen(process.env.PORT || 3000, () => {
    console.log(chalk.green('Listening on port 3000'));
});
