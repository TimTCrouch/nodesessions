const mongoose = require('mongoose');
//we change to our new dog model, dog2
const Dog = require('./schemas/dog2');

const startup = async () => {
    try {
        await mongoose.connect('mongodb://localhost/mongoose');

        //try to make a model that doesn't meet the schema at all
        const terry = new Dog({breed: 'corgi', age: 8, armor: 'Kevlar'});

        await terry.save();
        console.log('Terry the Dog was saved to the DB!');
    } catch (ex) {
        console.log('Error!');
        console.log(ex);
    }
};

startup();

