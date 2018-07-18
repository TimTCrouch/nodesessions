const express = require('express');
const chalk = require('chalk');

const app = express();

//jQuery was not found in the browser, so need to add a static folder
//this is an example of middleware
app.use('/access', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(chalk.green('Listening on port 3000'));
});