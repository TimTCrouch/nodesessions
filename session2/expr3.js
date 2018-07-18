const express = require('express');
const chalk = require('chalk');

const app = express();

//send a file, which is useful for SPAs
app.get('/', (req, res) => {
    //__dirname is a node-defined constant with the parent directory path
    res.sendFile(__dirname + '/home.html');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(chalk.green('Listening on port 3000'));
});