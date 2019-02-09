const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// This is our json object to send to localhost:3001
let performers = [
  {
    name: 'Justin',
    attribute: 'Singer',
    price: '20.0',
    location: 'Vancouver'
  },
  {
    name: 'Sarah',
    attribute: 'Singer',
    price: '40.0',
    location: 'Coquitlam'
  }
];

app.use(cors());

// using express, we can send our json object
app.get('/', function (req, res) {
  res.send(performers)
});

app.listen(PORT, function() {
  console.log("Server running on Port: " + PORT);
});

