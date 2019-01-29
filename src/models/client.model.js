'use strict';

const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    done: { type: Boolean, required: true }
});

module.exports = mongoose.model('todo', TodoSchema);