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
  },
  {
    name: 'Parm',
    attribute: 'Dancer',
    price: '70.0',
    location: 'Surrey'
  },
  {
    name: 'Matthew',
	attribute: 'Musician',
	price: '50.0',
	location: 'Vancouver'
  },
  {
	name: 'Dorothy',
	attribute: 'Dancer',
	price: '55.0',
	location: 'Richmond'
  },
  {
	name: 'Tas',
	attribute: 'Dancer',
	price: '45.0',
	location: 'Delta'
  },
  {
	name: 'Alex',
	attribute: 'Singer',
	price: '48.0',
	location: 'Delta'
  },
  {
	name: 'Mia',
	attribute: 'Musician',
	price: '120.0',
	location: 'Burnaby'
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

