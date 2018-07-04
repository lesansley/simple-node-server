const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

app
  .use(morgan('combined'))
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json());

app.use((req, res, next) => {
  const now = new Date().toString(),
    log = `${now}: ${req.ip} ${req.method} ${req.url}`;
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) console.log(err);
  });
  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'DELETE, GET, OPTIONS, PATCH, POST, PUT');
    return res.status(200).json({});
  }
  next();
});

require('./routes')(app);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
