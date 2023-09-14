const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/team_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Import routes
const playerRoutes = require('./routes/playerRoutes');

// Use player routes
app.use('/api/players', playerRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
