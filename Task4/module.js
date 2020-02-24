const express = require('express');
const app = express();

const name = require('./api/routes/name');
const age = require('./api/routes/age');

app.use('/name',name);
app.use('/age',age);

module.exports = app;
