const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/8000', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define Author Schema and Model (mongoose)
const authorSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
});

const Author = mongoose.model('Author', authorSchema);

// Define Routes (CRUD operations)
// Implement CRUD operations here (Create, Read, Update, Delete)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
