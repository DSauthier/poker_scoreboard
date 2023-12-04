const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const pokerGameController = require('../controllers/pokerGameController');

router.post('/players', playerController.createPlayer);
router.get('/players', playerController.getPlayers);
router.post('/pokerGames', pokerGameController.createPokerGame);
router.get('/pokerGames', pokerGameController.getPokerGames);

module.exports = router;
