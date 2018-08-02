const mongoose = require('mongoose');

const Dog = mongoose.model('Dog', {
    //add validation objects
    name: {
        type: String,
        required: true
    },
    legs: {
        type: Number,
        required: true
    }
});

module.exports = Dog;
