const mongoose = require('mongoose');

const pokerGameSchema = new mongoose.Schema({
  game_id: String,
  game_date: Date,
  number_of_players: Number,
  money_played: Number,
  players_names: [String],
  player_id: [String],
  player_results: [{
    player_id: String,
    amount_won: Number,
    amount_lost: Number,
  }],
});

const PokerGame = mongoose.model('PokerGame', pokerGameSchema);

module.exports = PokerGame;
