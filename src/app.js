const express = require('express');
const { sayHello } = require('./lib/strings.js');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

module.exports = app;
