//require the express library
const express = require('express');
const chalk = require('chalk');

//create the app where we can start installing middleware
const app = express();

//basic route and route handler
app.get('/', (req, res) => {
    res.send('hello, express');
});

//see if there is a port in environment or choose 3000
app.listen(process.env.PORT || 3000, () => {
   console.log(chalk.green('Listening on port 3000'));
});