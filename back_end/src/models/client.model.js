'use strict';

const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    fullName: { type: String, required: true},
    cpf: { type: Number, required: true},
    phone: { type: Number, required: true},
    email: { type: String, required: true},
    age: { type: Number, required: true}
});

module.exports = mongoose.model('todo', TodoSchema);