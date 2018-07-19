const chalk = require('chalk');
const world = require('./world');
//all of the exports from greeter can be required at once
const greeter = require('./greeter');

console.log(greeter);

console.log(chalk.green(`${greeter.japanese}, ${world.message}`));
