const mongoose = require('mongoose');
const Dog = require('./schemas/dog3');
//bring in our new Bone model
const Bone = require('./schemas/bone1');

const startup = async () => {
    try {
        await mongoose.connect('mongodb://localhost/mongoose');

        //we need to create some new dogs
        const markoModel = new Dog({name: 'Marko', legs: 3});
        const sabrinaModel = new Dog({name: 'Sabrina', legs: 4});
        await markoModel.save();
        await sabrinaModel.save();
        console.log('Our new dogs are saved');

        //query for Marko
        const marko = await Dog.findOne({name: 'Marko'});
        if (marko) {
            //we have Marko, so create a new bone
            const bone = new Bone({_id: new mongoose.Types.ObjectId(), age: 3, smell: 'Pretty bad'});
            //save the bone
            await bone.save();
            //set Marko's bone property to the ID of the bone
            marko.bone = bone._id;
            //save Marko
            await marko.save();
            console.log('Marko now has a bone!');
        }
    } catch (ex) {
        console.log(`Error! ${ex}`);
    }
};

startup();

