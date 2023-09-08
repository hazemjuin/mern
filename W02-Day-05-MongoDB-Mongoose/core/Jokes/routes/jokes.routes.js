// routes/jokes.routes.js
const express = require('express');
const router = express.Router();
const {
    getAllJokes,
    getJokeById,
    createJoke,
    updateJoke,
    deleteJoke,
} = require('../controllers/jokes.controller');

// Routes
router.get('/', getAllJokes);
router.get('/:id', getJokeById);
router.post('/', createJoke);
router.put('/:id', updateJoke);
router.delete('/:id', deleteJoke);

module.exports = router;
