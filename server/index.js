const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../dist/index.html');
});


// this will get all of the current jobs applied to
// app.get('/joblist', (req, res) => {

// });

// this will post to the db a new job application
app.post('/joblist', (req, res) => {
  console.log('message received', req.body);
  res.send('success!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

