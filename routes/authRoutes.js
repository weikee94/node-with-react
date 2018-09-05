const passport = require('passport');

module.exports = (app) => {
        
    app.get('/auth/google/callback', 
        passport.authenticate('google')
    )

    app.get('/auth/google', 
            // authenticate string is the strategy name 
            passport.authenticate('google', {
            // scope is the one we request info from google
            scope: ['profile', 'email']
        })
    );
}
