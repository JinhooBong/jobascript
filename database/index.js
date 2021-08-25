const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jobascript');

const db = mongoose.connection;

db.on('error', () => {
  console.log('Mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;