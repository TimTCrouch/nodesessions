const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/access', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home3.html');
});

//custom middleware. Can be used for logging, authorization, etc.
app.use('/', (req, res, next) => {
    if (req.body.name !== 'Clothor') {
        res.send('Not allowed!');
        return;
    }
    next();
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Success, ${req.body.name}!`);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(chalk.green('Listening on port 3000'));
});