const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: String,
    game1: String,
    game2: String,
    game3: String,
});

module.exports = mongoose.model('Player', playerSchema);
