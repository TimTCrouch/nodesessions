const express = require('express');
const chalk = require('chalk');
//requiring in a custom express router
const spotRouter = require('./spotRouter');

const app = express();

app.use('/access', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

//register a custom router as middleware
app.use('/spot', spotRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(chalk.green('Listening on port 3000'));
});