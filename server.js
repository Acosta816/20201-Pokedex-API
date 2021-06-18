"use strict";
//imports
const express = require('express');
const morgan = require('morgan');

//create express app
const app = express();

//preliminary middleware
app.use(morgan('dev'));

app.use((req, res) => {
    res.send('Hello, world!')
});

//export the app to be used by server-controller
module.exports = app;