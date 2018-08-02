const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bone = mongoose.model('Bone', {
    _id: Schema.Types.ObjectId,
    age: {
        type: Number,
        required: true
    },
    smell: {
        type: String,
        require: true
    }
});

module.exports = Bone;


