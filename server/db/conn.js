const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DATABASE;

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB ATLAS');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
