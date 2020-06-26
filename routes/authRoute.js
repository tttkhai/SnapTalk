const passport = require("passport");

module.exports=(app)=>{
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['email', 'birthday', 'name', 'profile']
        })
    );

    app.get('/auth/google/callback', 
        passport.authenticate('google'),
        (req, res)=>{
            res.redirect('/');
        }
    );

}