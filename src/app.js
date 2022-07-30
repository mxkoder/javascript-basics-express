const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add } = require('./lib/numbers');

const app = express();

// strings
app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  return req.query.length
    ? res.json({ result: firstCharacters(req.params.string, req.query.length) })
    : res.json({ result: firstCharacters(req.params.string, 1) });
});

// numbers
app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(a, b) });
});

module.exports = app;
