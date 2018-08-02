const mongoose = require('mongoose');
const Dog = require('./schemas/dog2');

const startup = async () => {

    try {
        await mongoose.connect('mongodb://localhost/mongoose');

        //find one dog
        const david = await Dog.findOne({name: 'David'});
        if (david) {
            console.log('We found David!');
            console.log(david);
        }

        //find multiple dogs
        const dogs = await Dog.find({legs: 4});
        if (dogs) {
            console.log(`We found ${dogs.length} dogs with 4 legs`);
        }
    } catch (ex) {
        console.log(`Error! ${ex}`);
    }
};

startup();
