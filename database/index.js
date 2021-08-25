const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/jobascript', { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Database has been connected');
  })
  .catch((err) => {
    console.log('Error:', err);
  });

module.exports = mongoose.connection;