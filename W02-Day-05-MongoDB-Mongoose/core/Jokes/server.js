// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Import and use your joke routes here
const jokeRoutes = require('./server/routes/jokes.routes');
app.use('/api/jokes', jokeRoutes);

// Start the server
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
