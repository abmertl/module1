const express = require('express');
const app = express();

const port = 1234;

// First endpoint
app.get('/name', (req, res) => {
  const fullName = "Abdullah Mert Leblebici";
  res.send(fullName);
});

// Second endpoint
app.get('/group', (req, res) => {
  const group = "KP-14";
  res.send(group);
});

// Third endpoint
app.get('/time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(currentTime);
});

app.listen(port, () => {
  console.log({port});
});