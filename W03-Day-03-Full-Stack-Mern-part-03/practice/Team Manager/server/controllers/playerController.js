const Player = require('../models/Player');

// Controller functions for CRUD operations
exports.getPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.addPlayer = async (req, res) => {
    try {
        const { name, game1, game2, game3 } = req.body;
        const player = new Player({ name, game1, game2, game3 });
        await player.save();
        res.status(201).json(player);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

exports.editPlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, game1, game2, game3 } = req.body;
        const player = await Player.findByIdAndUpdate(id, { name, game1, game2, game3 }, { new: true });
        if (!player) return res.status(404).json({ error: 'Player not found' });
        res.json(player);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

exports.deletePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const player = await Player.findByIdAndDelete(id);
        if (!player) return res.status(404).json({ error: 'Player not found' });
        res.json({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
