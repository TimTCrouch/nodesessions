const express = require('express');
const chalk = require('chalk');

const app = express();

app.get('/', (req, res) => {
    res.send('hello, express');
});

app.get('/something', (req, res) => {
    res.send('something');
});

//adding the : to a route segment makes it a parameter
app.get('/something/:val', (req, res) => {
    res.send(`You sent: '${req.params.val}'`);
});

//the order of routes is important. The previous route is greedy
app.get('/something/noreach', (req, res) => {
    res.send('You will never reach this');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(chalk.green('Listening on port 3000'));
});