// mongoose.config.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_db', {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));
