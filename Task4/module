const express = require('express');
const app = express();

const nameRoutes = require('./api/routes/name');
const ageRoutes = require('./api/routes/age');

app.use('/name',nameRoutes);
app.use('/age',ageRoutes);

module.exports = app;
