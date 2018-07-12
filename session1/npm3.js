const chalk = require('chalk');
//requiring my own JS file
const world = require('./world');

console.log(chalk.green(`Hello, ${world.message}`));
