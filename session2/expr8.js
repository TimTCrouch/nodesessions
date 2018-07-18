const express = require('express');
const chalk = require('chalk');
const spotRouter = require('./spotRouter');

const app = express();

app.use('/access', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.use('/spot', spotRouter);

//Adding a 404 error message
app.use('*', (req, res) => {
    res.send('404 Not Found');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(chalk.green('Listening on port 3000'));
});