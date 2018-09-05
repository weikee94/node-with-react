const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const mongoose = require('mongoose');

const User = mongoose.model('users');

const keys = require('../config/keys');

// telling passport make use of the google strategy
// take two params: client id, and client secret
// client ID: this is public token
// client secret: this is private token, dont expose this one

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        // any manipulation to database consider asynchronous
        // and it return promise so we able to use chain
        User.findOne({ googleId: profile.id }).then((existingUser) => {
           if (existingUser) {
               // done accept two arguments
               // first argument: if the user exists pass null
               // second argument: pass the user
               done(null, existingUser);
           } else {
               new User({
                   googleId: profile.id
               }).save().then((user) => {
                    // since this is considered asyn function
                    // we want to ensure that the user already saved 
                    // then only call done 
                    done(null, user);
               });
           }
        }) 

    }
));

