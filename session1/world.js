//obj is effectively private until exported
const obj = {
    message: 'world'
};

let y = 6;

//module.exports reveals only the members you want to export
module.exports = obj;