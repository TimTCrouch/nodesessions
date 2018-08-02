const express = require('express');
const app = express();
const http = require('http').Server(app);
const socketIo = require('socket.io')(http);
const chalk = require('chalk');

//a list of auto-names to give users
let names = ['Bilbo', 'Frodo', 'Gandalf', 'Sauron', 'Gollum'];
//the list of users in the chat room
let users = {};

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home5.html');
});

socketIo.on('connection', (socket) => {
    //save the user's socket ID
    users[socket.id] = names[0];
    console.log(chalk.magenta(`${names[0]} connected!`));
    //remove that name from the list
    names.splice(0, 1);

    socket.on('msg', (data) => {
        //find the username from the list of connected users
        const user = users[socket.id];
        console.log(chalk.cyan(`From ${user}: ${data.message}`));

        //send message to all users except the sender
        socket.broadcast.emit('chat', `${user}: ${data.message}`);
    });

    socket.on('disconnect', () => {
        //get the user name of the disconnecting user
        const user = users[socket.id];
        console.log(chalk.red(`${user} disconnected`));
        //put the name back in the name list
        names.push(user);
    });
});

http.listen(process.env.PORT || 3000, () => {
    console.log(chalk.green('Listening on port 3000'));
});


