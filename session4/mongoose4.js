const mongoose = require('mongoose');
const Dog = require('./schemas/dog1');

const startup = async () => {
    await mongoose.connect('mongodb://localhost/mongoose');

    //try to make a model that doesn't meet the schema at all
    const terry = new Dog({breed: 'corgi', age: 8, armor: 'Kevlar'});

    await terry.save();
    console.log('Terry the Dog was saved to the DB!');
};

startup();
