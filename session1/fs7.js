const fs = require('fs');
//using another built-in node package
const utility = require('util');

//convert the error-first callback function to use promises
const readFilePromise = utility.promisify(fs.readFile);

//wrap in an async function to use async/await
async function readFile() {
    try {
        let data = await readFilePromise('users/cool_people/coolFolks.txt');
        console.log(data.toString());
    } catch (ex) {
        console.log(`An error occurred while attempting to open file: ${ex}`);
    }
}

readFile();
