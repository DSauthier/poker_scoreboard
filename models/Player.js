const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  id: String,
  number_of_games_played: Number,
  total_amount_spent: Number,
  total_amount_received: Number,
  profit_loss: Number,
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
