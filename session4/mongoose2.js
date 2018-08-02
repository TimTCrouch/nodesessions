//import the newly-added package, mongoose
const mongoose = require('mongoose');
//bring in our schema
const Dog = require('./schemas/dog1');

//create a startup function so we can use async
const startup = async () => {

    //we await on a call to connect mongoose to mongoDB
    await mongoose.connect('mongodb://localhost/mongoose');

    //create the dog
    const david = new Dog({name: 'David', legs: 4});

    //save David to the DB
    await david.save();
    console.log('David the Dog was saved to the DB!');
};

startup();
