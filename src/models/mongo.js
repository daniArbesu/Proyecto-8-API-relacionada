const mongoose = require('mongoose');

const emptySchema = new mongoose.Schema({});

const Exercise = mongoose.model('Exercise', emptySchema);

module.exports = { Exercise };
