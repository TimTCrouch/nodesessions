//we need mongoose in here as well.
const mongoose = require('mongoose');

//create our model
const Dog = mongoose.model('Dog', {
    name: String,
    legs: Number
});

//export it for the outside world
module.exports = Dog;