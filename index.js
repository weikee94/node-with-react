// import express library

// since node only support common js, this is the
// way to sharing between different files

// There are two different modules system
// one called es2015 modules
// example
// import express from 'express';

// one called common js modules
// example
// const express = require('express');

const express = require('express');
require('./services/passport');

const app = express();

// this will call the item from authRoutes
// first return a function, second invoke the app object
require('./routes/authRoutes')(app);

// for heroku listen
const PORT = process.env.PORT || 5000;

app.listen(PORT);

