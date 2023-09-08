// controllers/jokes.controller.js
const Joke = require('../models/jokes.model');

// Function to get all jokes
exports.getAllJokes = async (req, res) => {
    try {
    const jokes = await Joke.find();
    res.json(jokes);
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
};

// Function to get a single joke
exports.getJokeById = async (req, res) => {
    try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) {
        return res.status(404).json({ error: 'Joke not found' });
    }
    res.json(joke);
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
};

// Function to create a joke
exports.createJoke = async (req, res) => {
    try {
    const joke = new Joke(req.body);
    await joke.save();
    res.status(201).json(joke);
    } catch (err) {
    res.status(400).json({ error: err.message });
    }
};

// Function to update a joke
exports.updateJoke = async (req, res) => {
    try {
    const updatedJoke = await Joke.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!updatedJoke) {
        return res.status(404).json({ error: 'Joke not found' });
    }
    res.json(updatedJoke);
    } catch (err) {
    res.status(400).json({ error: err.message });
    }
};

// Function to delete a joke
exports.deleteJoke = async (req, res) => {
try {
    const deletedJoke = await Joke.findByIdAndRemove(req.params.id);
    if (!deletedJoke) {
    return res.status(404).json({ error: 'Joke not found' });
    }
    res.json(deletedJoke);
} catch (err) {
    res.status(500).json({ error: err.message });
}
};
