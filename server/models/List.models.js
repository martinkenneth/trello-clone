const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'List title is required'],
        minlength: [1, 'List title must be at least 1 character']
    }
}, {timestamps: true});

const List = mongoose.model('List', ListSchema);
module.exports = List;