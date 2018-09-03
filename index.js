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

const app = express();

// route handler
app.get('/', (req, res) => {
    res.send({
        hi: 'there'
    });
})

// for heroku listen
const PORT = process.env.PORT || 5000;

app.listen(PORT);


