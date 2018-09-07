const passport = require('passport');

module.exports = (app) => {
        
    app.get('/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/data');
        }
    )

    app.get('/auth/google', 
            // authenticate string is the strategy name 
            passport.authenticate('google', {
            // scope is the one we request info from google
            scope: ['profile', 'email']
        })
    );

    // this is for logout function
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

}
