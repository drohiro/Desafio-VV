require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const BodyParser = require('body-parser');

app.use(BodyParser.urlencoded({
    extended: true
}));

const rotes = require('../app/rotes/rotes');
rotes(app);

module.exports = app;