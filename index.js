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
const mongoose = require('mongoose');
const keys = require('./config/keys');

// import cookiesession and passport
// imform passport use cookies to keep track
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI).then(() => {
    console.log("Connected");
}, (e) => {
    console.log(e);
});

const app = express();

app.use(
    cookieSession({
       // maxAge is how long the cookies can 
       // inside browser
       // need to be mili seconds 
       maxAge: 30*24*60*60*1000,
       keys: [
           keys.cookieKey
       ]
    })
)

app.use(passport.initialize());
app.use(passport.session());

// app.use for middleware
app.use(bodyParser.json());

// this will call the item from authRoutes
// first return a function, second invoke the app object
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Make sure express will serve up production assets
    // like our main.js and main.css file 
    app.use(express.static('client/build'));

    // Express will serve up index.html 
    // if it doesnt recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// for heroku listen
const PORT = process.env.PORT || 5000;

app.listen(PORT);





