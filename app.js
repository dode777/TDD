const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send({ greeting: 'Hi from home' });
});

module.exports = app;
