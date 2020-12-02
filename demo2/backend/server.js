// npx nodemon server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('I am home');
});

app.get('/login', (req, res) => {
  res.end('I am login');
});

app.listen(3000, () => {
  console.log('Server is running.');
});
