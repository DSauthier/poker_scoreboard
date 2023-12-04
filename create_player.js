const db = require('./db'); // Make sure the path is correct
const Player = require('./models/Player'); // Adjust the path accordingly

// Test data for creating a new player
const newPlayerData = {
  name: "John Doe",
  id: "12345",
  number_of_games_played: 0,
  total_amount_spent: 0,
  total_amount_received: 0,
  profit_loss: 0,
};

// Save the new player to the database
const createPlayer = async () => {
  try {
    const newPlayer = new Player(newPlayerData);
    await newPlayer.save();
    console.log('New player created:', newPlayer);
  } catch (error) {
    console.error('Error creating player:', error);
  } finally {
    db.close(); // Close the database connection when done
  }
};

createPlayer();
