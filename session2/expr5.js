const express = require('express');
const chalk = require('chalk');
//adding a new require
const bodyParser = require('body-parser');

const app = express();

//use body parser to parse parameters sent with request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/access', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home2.html');
});

//different HTTP verbs can be used
app.post('/', (req, res) => {
    //POST body values encoded onto the request's 'body' object
    console.log(req.body);
    res.send(`Success, ${req.body.name}!`);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(chalk.green('Listening on port 3000'));
});