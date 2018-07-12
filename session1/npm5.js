const chalk = require('chalk');
const greeter = require('./greeter');
//navigating file paths in require
const users = require('./users/other/users');

console.log(chalk.green(`${greeter.japanese}, ${users.creator}`));
