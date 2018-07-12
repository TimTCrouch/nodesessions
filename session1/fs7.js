const fs = require('fs');
const utility = require('util');

const readFilePromise = utility.promisify(fs.readFile);

async function readFile() {
    try {
        let data = await readFilePromise('users/cool_people/coolFolks.txt');
        console.log(data.toString());
    } catch (ex) {

    }
}

readFile();
