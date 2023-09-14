const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Define routes for CRUD operations
router.get('/', playerController.getPlayers);
router.post('/', playerController.addPlayer);
router.put('/:id', playerController.editPlayer);
router.delete('/:id', playerController.deletePlayer);

module.exports = router;
