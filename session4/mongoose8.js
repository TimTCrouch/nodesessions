const mongoose = require('mongoose');
const Dog = require('./schemas/dog3');
const Bone = require('./schemas/bone1');

const startup = async () => {
    try {
        await mongoose.connect('mongodb://localhost/mongoose');

        const marko = await Dog.findOne({name: 'Marko'}).populate('bone');
        console.log('We got Marko with his bone:');
        console.log(marko);
    } catch (ex) {
        console.log(`Error! ${ex}`);
    }
};

startup();
