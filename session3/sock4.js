const express = require('express');
const app = express();
const http = require('http').Server(app);
const socketIo = require('socket.io')(http);
const chalk = require('chalk');

//create a counter to keep track of messages
let ctx = 0;

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home4.html');
});

socketIo.on('connection', (socket) => {
    console.log(chalk.magenta('A user connected!'));

    socket.on('msg', (data) => {
        console.log(chalk.cyan(`From the client: ${data.message}`));

        //set a repeating server-push response
        setInterval(() => {
            socket.emit('response', {message: `Response${ctx++}`});
        }, 1000);
    });
});

http.listen(process.env.PORT || 3000, () => {
    console.log(chalk.green('Listening on port 3000'));
});

