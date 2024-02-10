/*
used mulitple middlewears
like express router and morgan to log the HTTP reqeust
File created on 10th Feb 2024 By Madhu Kumar K S
*/

const express = require('express');
const app = express();
const morgan = require("morgan");

app.use(morgan('combined'));

module.exports = app;