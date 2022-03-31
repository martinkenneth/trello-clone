const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [2, 'Title must be at least 2 characters long']
    },
    description: {
        type: String
    },
    list: {
        type: String,
        required: [true, 'List is required']
    }
}, {timestamp: true});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;