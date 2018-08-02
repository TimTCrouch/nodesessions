const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Dog = mongoose.model('Dog', {
    name: {
        type: String,
        required: true
    },
    legs: {
        type: Number,
        required: true
    },
    //create a reference property
    bone: {type: Schema.Types.ObjectId, ref: 'Bone'}
});

module.exports = Dog;

