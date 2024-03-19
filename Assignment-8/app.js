// app.js

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Replace 'yourDatabase' with the actual name of your database
const mongoURI = process.env.DATABASE_URL || 'mongodb://localhost:27017/Assignment';
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Assignment');


const db = mongoose.connection;
db.on('error', (error) => console.error('Connection error:', error));
db.once('open', () => console.log('Connected to the database'));

// Middleware to parse JSON
app.use(express.json());

// User routes
app.use('/user', userRoutes);

// A simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello World! The server is up and running.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
