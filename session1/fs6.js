//fs stands for "File System" and is a built-in package
const fs = require('fs');

//the traditional way of making async calls in node, with "error first" callbacks
fs.readFile('users/cool_people/coolFolks.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    //What will this print out? Why?
    console.log(data);
});
