const mongoose = require('mongoose');
const Dog = require('./schemas/dog1');

const startup = async () => {
    await mongoose.connect('mongodb://localhost/mongoose');

    //try to make a model that adds a property not in the schema
    const brian = new Dog({name: 'Brian', legs: 4, nametag: false});

    await brian.save();
    console.log('Brian the Dog was saved to the DB!');
};

startup();

