// Bring in our dependencies
const express = require('express');
const app = express();

// Create a simple get response
app.get('/', (req, res) => res.send('Hello World!'));

// Start server
const listenIP = 'localhost';
const listenPort = 3400;
app.listen(listenPort, listenIP, () => {
  console.log('App listening on ' + listenIP + ':' + listenPort);
});
